import 'package:favorite_place_app/data/place.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final placeProvider = Provider((ref) {
  return placeDatas;
});
