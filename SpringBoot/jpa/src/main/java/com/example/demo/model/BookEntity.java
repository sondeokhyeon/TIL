package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "book")
@Getter
@Setter
public class BookEntity implements Serializable {

	private static final long serialVersionUID = -2163155899972784002L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(length = 50)
	private String name;
	
	@Column
	private int price;
	
	@Lob
	@Column
	private String desc;
	
}
