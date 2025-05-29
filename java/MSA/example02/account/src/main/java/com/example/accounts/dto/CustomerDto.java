package com.example.accounts.dto;

import lombok.Data;

@Data
public class CustomerDto {

    private Long customerId;

    private String name; 

    private String email; 

    private String mobileNumber; 
}
