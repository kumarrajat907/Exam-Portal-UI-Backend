package com.nagarro.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.entity.Role;

public interface RoleRepo extends JpaRepository<Role, Integer>{

}
