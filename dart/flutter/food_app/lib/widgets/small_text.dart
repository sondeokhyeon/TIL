import 'package:flutter/material.dart';

class SmallText extends StatelessWidget {
  Color? color;
  final String text;
  double size;
  double height;

  SmallText({
    super.key,
    this.color = const Color(0xFF89dad0),
    required this.text,
    this.height = 1.2,
    this.size = 12,
  });

  @override
  Widget build(BuildContext context) {
    return Text(text,
        style: TextStyle(
          color: color,
          fontWeight: FontWeight.w400,
          height: height,
          fontSize: size,
          fontFamily: 'Roboto',
        ));
  }
}
