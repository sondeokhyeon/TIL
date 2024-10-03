import 'dart:math';

import 'package:flutter/material.dart';

class DiceImage extends StatefulWidget {
  const DiceImage({super.key});

  @override
  createState() => _DiceImageState();
}

class _DiceImageState extends State<DiceImage> {
  var diceNumber = 1;

  void rollDice() {
    setState(() {
      diceNumber = Random().nextInt(6) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image(
          width: 200,
          height: 200,
          image: AssetImage("assets/images/dice-$diceNumber.png"),
        ),
        TextButton(
          onPressed: rollDice,
          child: const Text(
            "Roll Dice",
            style: TextStyle(fontSize: 18, color: Colors.black),
          ),
        )
      ],
    );
  }
}
