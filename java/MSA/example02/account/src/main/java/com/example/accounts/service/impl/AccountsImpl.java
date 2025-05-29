package com.example.accounts.service.impl;

import org.springframework.stereotype.Service;

import com.example.accounts.Repository.AccountRepository;
import com.example.accounts.Repository.CustomerRepository;
import com.example.accounts.dto.CustomerDto;
import com.example.accounts.service.IAccountsService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AccountsImpl implements IAccountsService {

    private AccountRepository accountRepository;
    private CustomerRepository customerRepository;

    @Override
    public void createAccount(CustomerDto customerDto) {

    }
    
}
