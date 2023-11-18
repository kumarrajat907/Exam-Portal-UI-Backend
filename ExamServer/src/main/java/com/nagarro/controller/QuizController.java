package com.nagarro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.entity.exam.Category;
import com.nagarro.entity.exam.Quiz;
import com.nagarro.service.QuizService;

@RestController
@RequestMapping("/quiz")
public class QuizController {
	@Autowired
	private QuizService quizService;

	@PostMapping("/add")
	public ResponseEntity<Object> addQuiz(@RequestBody Quiz quiz) {
		return new ResponseEntity<Object>(this.quizService.addQuiz(quiz), HttpStatus.CREATED);
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateQuiz(@RequestBody Quiz quiz) {
		return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<Quiz>> getAllQuiz() {
		return ResponseEntity.ok(this.quizService.getAllQuiz());
	}

	@GetMapping("/get")
	public ResponseEntity<Object> getById(@RequestParam int v) {
		return new ResponseEntity<Object>(this.quizService.getQuizById(v), HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> deleteById(@RequestParam int v) {
		this.quizService.deleteQuiz(this.quizService.getQuizById(v));

		return new ResponseEntity<Object>(null, HttpStatus.OK);
	}

	@GetMapping("/category")
	public ResponseEntity<Object> getByCategory(@RequestParam int v) {
		Category category = new Category();
		category.setcId(v);
		return new ResponseEntity<Object>(this.quizService.getByCategory(category), HttpStatus.OK);
	}
}
