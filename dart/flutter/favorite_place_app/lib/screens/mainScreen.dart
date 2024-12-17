import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class MainScreen extends ConsumerStatefulWidget {
  const MainScreen({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _MainScreenState();
}

class _MainScreenState extends ConsumerState<MainScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 2.0,
        title: const Text("your places"),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {
              print('hello');
            },
          )
        ],
      ),
      body: Container(),
    );
  }
}
