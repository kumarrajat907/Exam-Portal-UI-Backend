package com.nagarro.controller;

import java.util.NoSuchElementException;

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

import com.nagarro.entity.exam.Category;
import com.nagarro.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;

	@PostMapping("/add")
	public ResponseEntity<Object> addCategory(@RequestBody Category category) {
		return new ResponseEntity<>(this.categoryService.addCategory(category), HttpStatus.CREATED);
	}

	@GetMapping("/getAll")
	public ResponseEntity<Object> getAllCategory() {
		return new ResponseEntity<Object>(this.categoryService.getCategories(), HttpStatus.OK);
	}

	@GetMapping("/id")
	public ResponseEntity<Object> getById(@RequestParam int v) {
		if (this.categoryService.getCategoryById(v) == null) {
			throw new NoSuchElementException("No Category with this ID: " + v);
		} else {
			return new ResponseEntity<Object>(this.categoryService.getCategoryById(v), HttpStatus.OK);
		}

	}

	@DeleteMapping("/id")
	public ResponseEntity<Object> delete(@RequestParam int v) {
		this.categoryService.deleteCategory(v);
		return new ResponseEntity<Object>("Deleted successfully !!", HttpStatus.OK);
	}

	@PutMapping("/update")
	public ResponseEntity<Object> updateCategory(@RequestBody Category category) {
		return new ResponseEntity<>(this.categoryService.updateCategory(category), HttpStatus.CREATED);
	}
	
}
