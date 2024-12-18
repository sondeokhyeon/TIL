import 'package:favorite_place_app/models/place.dart';
import 'package:favorite_place_app/providers/place_provider.dart';
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
    final List<Place> placeList = ref.watch(placeProvider);

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
      body: SingleChildScrollView(
        child: Column(
          children: [
            for (final place in placeList) Text(place.title),
          ],
        ),
      ),
    );
  }
}
