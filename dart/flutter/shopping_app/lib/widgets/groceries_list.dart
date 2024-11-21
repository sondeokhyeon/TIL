import 'package:flutter/material.dart';
import 'package:shopping_app/data/dummy_items.dart';
import 'package:shopping_app/widgets/new_item.dart';
import 'package:shopping_app/models/grocery_item.dart';

class GroceriesList extends StatefulWidget {
  const GroceriesList({super.key});

  @override
  State<GroceriesList> createState() => _GroceriesListState();
}

class _GroceriesListState extends State<GroceriesList> {
  final List<GroceryItem> _groceryItems = [];

  void _addItem() async {
    final newItem = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (ctx) => const NewItem(),
      ),
    );

    if (newItem == null) return;

    setState(() {
      groceryItems.add(newItem);
    });
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
      body: _groceryItems.isEmpty
          ? const Center(
              child: Text(
                'Not found the groceries',
                style: TextStyle(color: Colors.white70, fontSize: 24),
              ),
            )
          : ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              itemCount: _groceryItems.length,
              itemBuilder: (BuildContext context, int index) => ListTile(
                leading: Container(
                  width: 24,
                  height: 24,
                  color: _groceryItems[index].category.color,
                ),
                title: Text(_groceryItems[index].name),
                trailing: Text(
                  _groceryItems[index].quantity.toString(),
                ),
              ),
            ),
    );
  }
}
