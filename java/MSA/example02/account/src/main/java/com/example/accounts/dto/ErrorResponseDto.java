package com.example.accounts.dto;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class ErrorResponseDto {
    
    private String apiPath;

    private HttpStatus errorCode; 
    
    private String errorMEssage; 

    private LocalDateTime errorTime;
}
