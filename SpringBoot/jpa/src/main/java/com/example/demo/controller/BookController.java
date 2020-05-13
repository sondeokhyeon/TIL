package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.BookDAO;
import com.example.demo.model.BookEntity;

@RestController
public class BookController {

	@Autowired BookDAO bookDAO;
	
	
	@GetMapping("/book/list")
	public Iterable<BookEntity> getList() {
		return bookDAO.findAll();
	}
	
	
}
