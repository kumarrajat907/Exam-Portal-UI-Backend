package com.nagarro.dto;

public class UserRoleDto {
	private int userRoleId;
	private UserDto user;
	private RoleDto roles;

	public UserRoleDto(int userRoleId, UserDto user, RoleDto roles) {
		super();
		this.userRoleId = userRoleId;
		this.user = user;
		this.roles = roles;
	}

	public RoleDto getRoles() {
		return roles;
	}

	public void setRoles(RoleDto roles) {
		this.roles = roles;
	}

	public UserRoleDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(int userRoleId) {
		this.userRoleId = userRoleId;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}
}
