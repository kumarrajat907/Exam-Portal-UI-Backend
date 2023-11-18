package com.nagarro;

import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ExamServerApplication implements CommandLineRunner{
	

	public static void main(String[] args) {
		SpringApplication.run(ExamServerApplication.class, args);
	}

	@Bean
	ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("started");
		
		/*
		 * UserDto userDto=new UserDto(); userDto.setEmail("rk@gmail.com");
		 * userDto.setFirstName("Rajat"); userDto.setLastName("Kumar");
		 * userDto.setPassword("123");
		 * 
		 * RoleDto roleDto1=new RoleDto(); roleDto1.setRoleId(1);
		 * roleDto1.setRoleName("ADMIN"); Set<RoleDto> userRoleSet=new HashSet<>();
		 * userRoleSet.add(roleDto1); //userDto.setUserRole(userRoleSet); UserDto
		 * dto=this.userService.createUser(userDto, userRoleSet);
		 * System.out.println(dto.getEmail());
		 */
		
	}

}
