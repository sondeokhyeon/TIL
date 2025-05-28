package com.example.accounts.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.accounts.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {

}
