package com.nagarro.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.entity.exam.Question;
import com.nagarro.entity.exam.Quiz;

public interface QuestionRepo extends JpaRepository<Question, Integer>{

	List<Question> findByQuiz(Quiz quiz);

}
