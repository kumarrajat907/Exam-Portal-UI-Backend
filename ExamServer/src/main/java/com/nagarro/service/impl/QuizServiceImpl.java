package com.nagarro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.entity.exam.Category;
import com.nagarro.entity.exam.Quiz;
import com.nagarro.repo.QuizRepo;
import com.nagarro.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	private QuizRepo quizRepo;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		return this.quizRepo.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepo.save(quiz);
	}

	@Override
	public List<Quiz> getAllQuiz() {
		// TODO Auto-generated method stub
		return this.quizRepo.findAll();
	}

	@Override
	public Quiz getQuizById(int id) {
		return this.quizRepo.findById(id).get();
	}

	@Override
	public void deleteQuiz(Quiz quiz) {
		this.quizRepo.delete(quiz);
	}

	@Override
	public List<Quiz> getByCategory(Category c) {
		return this.quizRepo.findByCategory(c);
	}

}
