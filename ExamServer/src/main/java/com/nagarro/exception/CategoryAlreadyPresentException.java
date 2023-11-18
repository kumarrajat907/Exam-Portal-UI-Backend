package com.nagarro.exception;

public class CategoryAlreadyPresentException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CategoryAlreadyPresentException(String message, String title) {
		super(message + " " + title);

	}

}
