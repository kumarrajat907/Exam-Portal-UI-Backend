package com.nagarro.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.entity.exam.Question;
import com.nagarro.entity.exam.Quiz;
import com.nagarro.service.QuestionService;
import com.nagarro.service.QuizService;

@RestController
@RequestMapping("/question")
public class QuestionController {
	@Autowired
	private QuestionService questionService;
	@Autowired
	private QuizService quizService;

	@PostMapping("/add")
	public ResponseEntity<Object> addQuestion(@RequestBody Question question) {
		return new ResponseEntity<Object>(this.questionService.addQuestion(question), HttpStatus.CREATED);
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateQuiz(@RequestBody Question question) {
		return ResponseEntity.ok(this.questionService.updateQuestion(question));
	}

	@GetMapping("/get")
	public ResponseEntity<Object> getByID(@RequestParam int v) {
		return ResponseEntity.ok(this.questionService.getQuestionById(v));
	}

	@GetMapping("/getAll")
	public ResponseEntity<Object> getAll() {
		return ResponseEntity.ok(this.questionService.getAllQuestion());
	}

	@GetMapping("/quiz/")
	public ResponseEntity<Object> getByQuiz(@RequestParam int v) {
		Quiz quiz = this.quizService.getQuizById(v);
		List<Question> list = new ArrayList<Question>(quiz.getQuestions());
		if (list.size() > Integer.parseInt(quiz.getNoOfQuestion())) {
			list = list.subList(0, Integer.parseInt(quiz.getNoOfQuestion()) + 1);
		}
		Collections.shuffle(list);
		return new ResponseEntity<Object>(list, HttpStatus.OK);
	}

	@GetMapping("/quizAll/")
	public ResponseEntity<Object> getAllQuiz(@RequestParam int v) {
		Quiz quiz = this.quizService.getQuizById(v);
		// List<Question> list = new ArrayList<Question>(quiz.getQuestions());
		List<Question> list = this.questionService.getQuestionOfQuiz(quiz);
		Collections.shuffle(list);
		return new ResponseEntity<Object>(list, HttpStatus.OK);
	}

	@DeleteMapping("/delete")
	public ResponseEntity<Object> deleteById(@RequestParam int v) {
		this.questionService.deleteQuestion(v);
		return new ResponseEntity<Object>(null, HttpStatus.OK);
	}
}
