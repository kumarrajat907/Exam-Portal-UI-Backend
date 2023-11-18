package com.nagarro.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.entity.exam.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer>{
	Category findByTitle(String title);
}
