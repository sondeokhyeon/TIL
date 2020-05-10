package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.BookEntity;

public interface BookDAO extends CrudRepository<BookEntity, Long> {

	
}
