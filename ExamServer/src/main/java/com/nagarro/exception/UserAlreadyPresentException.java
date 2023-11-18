package com.nagarro.exception;

public class UserAlreadyPresentException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserAlreadyPresentException(String msg, String email) {
		super(msg + " " + email);
	}

}
