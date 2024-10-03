import 'package:flutter/material.dart';
import 'package:dice_app/screen/main_screen.dart';

void main() {
  runApp(const DiceApp());
}

class DiceApp extends StatelessWidget {
  const DiceApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Dice App',
      home: MainScreen(),
    );
  }
}
