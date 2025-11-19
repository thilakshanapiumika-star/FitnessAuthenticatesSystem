package com.fitnus.fitnusbackend.exception;

public class PostNotFoundException extends RuntimeException  {
    public PostNotFoundException(Long id){
        super("Could not found the  id"+id);
    }
}
