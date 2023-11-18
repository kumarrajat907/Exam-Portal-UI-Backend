package com.nagarro.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.dto.UserDto;
import com.nagarro.entity.Role;
import com.nagarro.entity.User;
import com.nagarro.entity.UserRole;
import com.nagarro.exception.ResourceNotFoundException;
import com.nagarro.service.UserService;

@RestController
@RequestMapping("/user")
public class UserContoller {

	@Autowired
	private UserService userService;
	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/register")
	public ResponseEntity<Object> createUser(@RequestBody UserDto userDto) throws Exception {
		User user = this.modelMapper.map(userDto, User.class);
		List<UserRole> userRole = new ArrayList<>();

		Role roleDto = new Role();
		roleDto.setRoleId(2);
		roleDto.setRoleName("NORMAL");

		UserRole userRoleDto = new UserRole();
		userRoleDto.setUser(user);
		userRoleDto.setRoles(roleDto);

		userRole.add(userRoleDto);
		return new ResponseEntity<>(this.userService.createUser(user, userRole), HttpStatus.CREATED);
	}

	@GetMapping("/")
	public ResponseEntity<Object> getUserByEmail(@RequestParam String email) {
		System.out.println(email);
		User userByEmail = this.userService.getByEmail(email);

		if (userByEmail == null) {
			throw new ResourceNotFoundException("User is not present with this email !!");
		} else {
			return new ResponseEntity<Object>(userByEmail, HttpStatus.OK);
		}

	}
}
