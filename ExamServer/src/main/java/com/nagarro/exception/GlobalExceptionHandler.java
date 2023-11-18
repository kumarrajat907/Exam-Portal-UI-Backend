package com.nagarro.exception;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(UserAlreadyPresentException.class)
	public ResponseEntity<String> userAlreadyPresent(UserAlreadyPresentException userAlreadyPresentException) {
		String msg = userAlreadyPresentException.getMessage();
		return new ResponseEntity<String>(msg, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(CategoryAlreadyPresentException.class)
	public ResponseEntity<String> categoryAlreadyPresent(
			CategoryAlreadyPresentException categoryAlreadyPresentException) {
		String msg = categoryAlreadyPresentException.getMessage();
		return new ResponseEntity<String>(msg, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<String> resourceNotFound(ResourceNotFoundException notFoundException) {
		String msg = notFoundException.getMessage();
		return new ResponseEntity<String>(msg, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<String> resourceNotFound(NoSuchElementException notFoundException) {
		String msg = notFoundException.getMessage();
		return new ResponseEntity<String>(msg, HttpStatus.NOT_FOUND);
	}
}
