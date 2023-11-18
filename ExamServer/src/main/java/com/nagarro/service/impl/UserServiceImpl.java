package com.nagarro.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nagarro.dto.UserDto;
import com.nagarro.entity.Role;
import com.nagarro.entity.User;
import com.nagarro.entity.UserRole;
import com.nagarro.exception.UserAlreadyPresentException;
import com.nagarro.repo.RoleRepo;
import com.nagarro.repo.UserRepo;
import com.nagarro.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private RoleRepo roleRepo;
	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;

	@Override
	public User createUser(User user, List<UserRole> userRole) throws Exception {

		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		// checking if user is exist already
		User localUserRepo = this.userRepo.findByEmail(user.getEmail());
		if (localUserRepo != null) {
			throw new UserAlreadyPresentException("User already present with Email: ", user.getEmail());
		} else {
			// creating user
			for (UserRole ur : userRole) {
//				uRole.add(this.modelMapper.map(ur,UserRole.class));
//				System.out.println(uRole);
				// this.userRepo.save(this.modelMapper.map(ur.getUser(), User.class));
				this.roleRepo.save(ur.getRoles());
			}

			user.getUserRole().addAll(userRole);
			localUserRepo = this.userRepo.save(user);
		}
		return localUserRepo;
	}

	@Override
	public User getByEmail(String email) {
		User user = this.userRepo.findByEmail(email);
		if (user != null) {
//			UserDto userDto = userToDto(user);
//			userDto.getUserRole().forEach(roles -> {
//				roles.setRoles(null);
//			});
			return user;
		}
		return null;
	}

	public User dtoToUser(UserDto userDto) {
		User user = this.modelMapper.map(userDto, User.class);
		return user;
	}

	public UserDto userToDto(User user) {
		UserDto userDto = this.modelMapper.map(user, UserDto.class);
		return userDto;
	}

	@Override
	public Role getByRoleId(int id) {
		return this.roleRepo.findById(id).get();
	}

}
