package com.nagarro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.entity.exam.Question;
import com.nagarro.entity.exam.Quiz;
import com.nagarro.repo.QuestionRepo;
import com.nagarro.service.QuestionService;
@Service
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionRepo questionRepo;

	@Override
	public Question addQuestion(Question question) {
		return this.questionRepo.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepo.save(question);
	}

	@Override
	public List<Question> getAllQuestion() {
		// TODO Auto-generated method stub
		return this.questionRepo.findAll();
	}

	@Override
	public Question getQuestionById(int id) {
		return this.questionRepo.findById(id).get();
	}

	@Override
	public void deleteQuestion(int id) {
		// TODO Auto-generated method stub
		this.questionRepo.deleteById(id);
	}

	@Override
	public List<Question> getQuestionOfQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.questionRepo.findByQuiz(quiz);
	}
	
	

}
