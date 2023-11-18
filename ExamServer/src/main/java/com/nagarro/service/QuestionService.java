package com.nagarro.service;

import java.util.List;

import com.nagarro.entity.exam.Question;
import com.nagarro.entity.exam.Quiz;

public interface QuestionService {
	Question addQuestion(Question question);
	Question updateQuestion(Question question);
	List<Question> getAllQuestion();
	Question getQuestionById(int id);
	void deleteQuestion(int id);
	List<Question> getQuestionOfQuiz(Quiz quiz);
}
