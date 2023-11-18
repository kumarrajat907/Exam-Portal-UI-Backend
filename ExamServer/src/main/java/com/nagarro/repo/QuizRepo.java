package com.nagarro.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.entity.exam.Category;
import com.nagarro.entity.exam.Quiz;

public interface QuizRepo extends JpaRepository<Quiz, Integer> {

	List<Quiz> findByCategory(Category category);
}
