import 'package:flutter/material.dart';
import 'package:dice_app/widgets/dice_image.dart';
import 'package:dice_app/widgets/custom_text.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Colors.white, Color(0xff019AEC)],
            ),
          ),
          child: const Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                CustomText("Dice App", Colors.white),
                DiceImage()
              ],
            ),
          ),
        ),
      ),
    );
  }
}
