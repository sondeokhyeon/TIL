
package com.example.querydsl.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * Hello
 */
@Entity
@Getter
@Setter
public class Hello {

    @Id @GeneratedValue
    private Long id;

}

