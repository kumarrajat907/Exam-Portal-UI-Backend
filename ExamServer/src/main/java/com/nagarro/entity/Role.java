package com.nagarro.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Role {
	@Id
	private int roleId;
	private String roleName;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "roles")
	private List<UserRole> role;

	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(int roleId, String roleName, List<UserRole> role) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
		this.role = role;
	}

	public List<UserRole> getRoles() {
		return role;
	}

	public void setRoles(List<UserRole> roles) {
		this.role = roles;
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
		return "Role [roleId=" + roleId + ", roleName=" + roleName + "]";
	}

}
