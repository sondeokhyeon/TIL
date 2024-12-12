import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;
import 'package:shopping_app/data/categories.dart';

import 'package:shopping_app/widgets/new_item.dart';
import 'package:shopping_app/models/grocery_item.dart';

class GroceriesList extends StatefulWidget {
  const GroceriesList({super.key});

  @override
  State<GroceriesList> createState() => _GroceriesListState();
}

class _GroceriesListState extends State<GroceriesList> {
  List<GroceryItem> _groceryItems = [];
  late Future<List<GroceryItem>> _loadedItems;

  @override
  void initState() {
    super.initState();
    _loadedItems = _loadItem();
  }

  Future<List<GroceryItem>> _loadItem() async {
    final url = Uri.https(
      dotenv.get('API_URL'),
      'shopping-list.json',
    );
    final r = await http.get(url);

    if (r.statusCode >= 400) {
      throw Exception('Failed to fetch data');
    }

    if (r.body == 'null') {
      return [];
    }
    final Map<String, dynamic> listData = json.decode(r.body);
    final List<GroceryItem> loadItems = [];

    for (final item in listData.entries) {
      final category = categories.entries
          .firstWhere(
              (catItem) => catItem.value.title == item.value['category'])
          .value;

      loadItems.add(
        GroceryItem(
          id: item.key,
          name: item.value['name'],
          quantity: item.value['quantity'],
          category: category,
        ),
      );
    }
    return loadItems;
  }

  void _addItem() async {
    final newItem = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (ctx) => const NewItem(),
      ),
    );

    if (newItem == null) {
      return;
    }

    setState(() {
      _groceryItems.add(newItem);
    });
  }

  void _removeItem(GroceryItem item) async {
    final index = _groceryItems.indexOf(item);
    setState(() {
      _groceryItems.remove(item);
    });
    final url = Uri.https(
      dotenv.get('API_URL'),
      'shopping-list/${item.id}.json',
    );
    final r = await http.delete(url);

    if (r.statusCode >= 400) {
      setState(() {
        _groceryItems.insert(index, item);
      });
    }
  }

  @override
  Widget build(context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Your Groceries'),
        actions: [
          IconButton(
            onPressed: _addItem,
            icon: const Icon(Icons.add),
          )
        ],
      ),
      body: FutureBuilder(
        future: _loadedItems,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) Center(child: Text(snapshot.error.toString()));
          if (snapshot.data!.isEmpty) {
            const Center(
              child: Text(
                'Not found the groceries',
                style: TextStyle(color: Colors.white70, fontSize: 24),
              ),
            );
          }
          return ListView.builder(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            itemCount: snapshot.data!.length,
            itemBuilder: (BuildContext context, int index) => Dismissible(
              onDismissed: (direction) {
                _removeItem(snapshot.data![index]);
              },
              key: ValueKey(snapshot.data![index].id),
              child: ListTile(
                leading: Container(
                  width: 24,
                  height: 24,
                  color: snapshot.data![index].category.color,
                ),
                title: Text(snapshot.data![index].name),
                trailing: Text(
                  snapshot.data![index].quantity.toString(),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
