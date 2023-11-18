package com.nagarro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.entity.exam.Category;
import com.nagarro.exception.CategoryAlreadyPresentException;
import com.nagarro.exception.ResourceNotFoundException;
import com.nagarro.repo.CategoryRepo;
import com.nagarro.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepo categoryRepo;

	@Override
	public Category addCategory(Category category) {
		Category categoryLocal = this.categoryRepo.findByTitle(category.getTitle());
		if (categoryLocal != null) {
			throw new CategoryAlreadyPresentException("Category already present with title: ", category.getTitle());
		}
		return this.categoryRepo.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return this.categoryRepo.save(category);
	}

	@Override
	public List<Category> getCategories() {
		if (this.categoryRepo.findAll().isEmpty()) {
			throw new ResourceNotFoundException("No category is present !!");
		}
		return this.categoryRepo.findAll();
	}

	@Override
	public Category getCategoryById(int cId) {
		if (categoryRepo.findById(cId).get() != null) {
			return this.categoryRepo.findById(cId).get();
		}
		return null;
	}

	@Override
	public void deleteCategory(int cId) {
		this.categoryRepo.deleteById(cId);

	}

}
