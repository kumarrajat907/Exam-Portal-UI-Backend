package com.nagarro.service;

import java.util.List;

import com.nagarro.entity.exam.Category;
import com.nagarro.entity.exam.Quiz;

public interface QuizService {
	Quiz addQuiz(Quiz quiz);

	Quiz updateQuiz(Quiz quiz);

	List<Quiz> getAllQuiz();

	Quiz getQuizById(int id);

	void deleteQuiz(Quiz quiz);

	List<Quiz> getByCategory(Category c);
}
