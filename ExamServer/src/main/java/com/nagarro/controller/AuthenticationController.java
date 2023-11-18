package com.nagarro.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.config.JwtUtils;
import com.nagarro.constants.Constant;
import com.nagarro.entity.User;
import com.nagarro.model.JwtResponse;
import com.nagarro.model.UserRequest;
import com.nagarro.service.impl.UserDetailsServiceImpl;

@RestController
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailsServiceImpl impl;

	@Autowired
	private JwtUtils jwtUtils;

	@PostMapping("/token")
	public ResponseEntity<?> generateToken(@RequestBody UserRequest jwtRequest) throws Exception {
		// JwtRequest jwt=null;
		try {
			// jwt= new JwtRequest(jwtRequest.getEmail(),jwtRequest.getPassword());
			authenticate(jwtRequest.getEmail(), jwtRequest.getPassword());
			UserDetails userDetails = this.impl.loadUserByUsername(jwtRequest.getEmail());
			String token = this.jwtUtils.generateToken(userDetails);
			return ResponseEntity.ok(new JwtResponse(token));
		} catch (BadCredentialsException e) {
			System.out.println("Bad Credentianls!!");
			e.printStackTrace();
			return ResponseEntity.ok("Please enter correct details !!");
		}

	}

	public void authenticate(String email, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		} catch (DisabledException e) {
			throw new DisabledException(Constant.USER_IS_DISABLE_MSG);
		} catch (BadCredentialsException e) {
			throw new BadCredentialsException(Constant.BAD_CREDENTIALS);
		} catch (Exception e) {
			throw new Exception(Constant.SOMETHING_WENT_WRONG);
		}
	}

	// return the details of logged in user
	@GetMapping("/current")
	public User currentCustomer(Principal principal) {
		return (User) this.impl.loadUserByUsername(principal.getName());
	}
}
