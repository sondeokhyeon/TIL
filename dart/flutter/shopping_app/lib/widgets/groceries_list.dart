import 'package:flutter/material.dart';
import 'package:shopping_app/data/dummy_items.dart';

class GroceriesList extends StatelessWidget {
  const GroceriesList({super.key});

  @override
  Widget build(context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Your Groceries'),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        itemCount: groceryItems.length,
        itemBuilder: (BuildContext context, int index) {
          return Padding(
            padding: const EdgeInsets.symmetric(vertical: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Container(
                      color: groceryItems[index].category.color,
                      height: 20,
                      width: 20,
                      margin: const EdgeInsets.only(right: 20),
                    ),
                    Text(groceryItems[index].name)
                  ],
                ),
                Text(groceryItems[index].quantity.toString())
              ],
            ),
          );
        },
      ),
    );
  }
}
