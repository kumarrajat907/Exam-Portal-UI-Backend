package com.nagarro.dto;

import java.util.ArrayList;
import java.util.List;

public class UserDto {
	private int userId;
	private String email;
	private String password;
	private String firstName;
	private String lastName;
	private boolean isEnable = true;
	private List<UserRoleDto> userRole = new ArrayList<>();

	public UserDto(int userId, String email, String password, String firstName, String lastName, boolean isEnable,
			List<UserRoleDto> userRole) {
		super();
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.isEnable = isEnable;
		this.userRole = userRole;
	}

	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public boolean isEnable() {
		return isEnable;
	}

	public void setEnable(boolean isEnable) {
		this.isEnable = isEnable;
	}

	public List<UserRoleDto> getUserRole() {
		return userRole;
	}

	public void setUserRole(List<UserRoleDto> userRole) {
		this.userRole = userRole;
	}

	@Override
	public String toString() {
		return "UserDto [userId=" + userId + ", email=" + email + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", isEnable=" + isEnable + "]";
	}

}
