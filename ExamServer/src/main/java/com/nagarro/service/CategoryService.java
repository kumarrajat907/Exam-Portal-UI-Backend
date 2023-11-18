package com.nagarro.service;

import java.util.List;

import com.nagarro.entity.exam.Category;

public interface CategoryService {
	Category addCategory(Category category);

	Category updateCategory(Category category);

	List<Category> getCategories();

	Category getCategoryById(int cId);

	void deleteCategory(int cId);
}
