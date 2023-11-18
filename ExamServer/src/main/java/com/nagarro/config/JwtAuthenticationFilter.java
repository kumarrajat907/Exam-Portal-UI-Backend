package com.nagarro.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.nagarro.constants.Constant;
import com.nagarro.exception.NotValidTokenException;
import com.nagarro.exception.NotValidUserException;
import com.nagarro.service.impl.UserDetailsServiceImpl;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsServiceImpl impl;

	@Autowired
	private JwtUtils jwt;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			final String requestTokenHeader = request.getHeader("Authorization");

			String email = null;
			String token = null;
			if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
				token = requestTokenHeader.substring(7);

				try {
					email = this.jwt.extractUsername(token);

				} catch (Exception e) {
					e.printStackTrace();
				}
			} else {
				System.out.println(Constant.NOT_VALID_TOKEN_MSG);
				throw new NotValidTokenException(Constant.NOT_VALID_TOKEN_MSG);
			}

			// validation
			if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				final UserDetails userDetails = this.impl.loadUserByUsername(email);
				if (this.jwt.validateToken(token, userDetails)) {
					// token is valid
					UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
					authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
					SecurityContextHolder.getContext().setAuthentication(authenticationToken);
				}
			} else {
				System.out.println(Constant.NOT_VALID_USER_MSG);
				throw new NotValidUserException(Constant.NOT_VALID_USER_MSG);
			}
		} catch (Exception e) {
			e.getMessage();
		}
		filterChain.doFilter(request, response);

	}

}
