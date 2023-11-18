package com.nagarro.dto;

import java.util.List;

public class RoleDto {
	private int roleId;
	private String roleName;
	private List<UserRoleDto> roles;

	public RoleDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RoleDto(int roleId, String roleName, List<UserRoleDto> roles) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
		this.roles = roles;
	}


	public List<UserRoleDto> getRoles() {
		return roles;
	}

	public void setRoles(List<UserRoleDto> roles) {
		this.roles = roles;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	@Override
	public String toString() {
		return "RoleDto [roleId=" + roleId + ", roleName=" + roleName +  "]";
	}
	
	
}
