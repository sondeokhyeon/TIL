import 'package:flutter/material.dart';
import 'package:meals_app/data/dummey_data.dart';
import 'package:meals_app/wigets/category_grid_item.dart';
import 'package:meals_app/screens/meals.dart';
import 'package:meals_app/models/category.dart';
import 'package:meals_app/models/meal.dart';

class CategoryScreen extends StatefulWidget {
  const CategoryScreen({
    super.key,
    required this.availableMeals,
  });

  final List<Meal> availableMeals;

  @override
  State<CategoryScreen> createState() => _CategoryScreenState();
}

class _CategoryScreenState extends State<CategoryScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 300),
      lowerBound: 0,
      upperBound: 1,
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _selectCategory(BuildContext context, Category category) {
    final filterdMeals = widget.availableMeals
        .where((meals) => meals.categories.contains(category.id))
        .toList();

    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (ctx) => MealsScreen(
          title: category.title,
          meals: filterdMeals,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
//_animationController();
    return GridView(
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
    );
  }
}
