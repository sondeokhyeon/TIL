package com.example.simpleapi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class sample {

    @GetMapping("/")
    public List<Map<String,Object>> sample1() {

        List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();

        Map<String,Object> map1 = new HashMap<String,Object>();
        Map<String,Object> map2 = new HashMap<String,Object>();
        Map<String,Object> map3 = new HashMap<String,Object>();

        map1.put("id", 1);
        map1.put("name", "테스트");
        map1.put("age", 31);
        map2.put("id", 2);
        map2.put("name", "테스트");
        map2.put("age", 32);
        map3.put("id", 3);
        map3.put("name", "테스트");
        map3.put("age", 33);

        list.add(map1);
        list.add(map2);
        list.add(map3);
        
        return list;
    }

}