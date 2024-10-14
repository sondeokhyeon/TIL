import 'package:flutter/material.dart';
import 'package:meals_app/data/dummey_data.dart';
import 'package:meals_app/wigets/category_grid_item.dart';
import 'package:meals_app/screens/meals.dart';
import 'package:meals_app/models/category.dart';

class CategoryScreen extends StatelessWidget {
  const CategoryScreen({super.key});

  void _selectCategory(BuildContext context, Category category) {
    final filterdMeals = dummyMeals
        .where((meals) => meals.categories.contains(category.id))
        .toList();

    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (ctx) => MealsScreen(title: 'title', meals: filterdMeals),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Pick a Category'),
      ),
      body: GridView(
        padding: const EdgeInsets.all(24),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 3 / 2,
          crossAxisSpacing: 20,
          mainAxisSpacing: 20,
        ),
        children: [
          for (final category in availableCategories)
            CategoryGridItem(
              category: category,
              selectCategory: () {
                _selectCategory(context, category);
              },
            )
        ],
      ),
    );
  }
}
