package com.nagarro.service;

import java.util.List;

import com.nagarro.entity.Role;
import com.nagarro.entity.User;
import com.nagarro.entity.UserRole;

public interface UserService {
	User createUser(User user,List<UserRole> userRole) throws Exception;
	
	User getByEmail(String email);
	Role getByRoleId(int id);
}
