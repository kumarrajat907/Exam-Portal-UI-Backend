package com.nagarro.entity.exam;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int qId;

	private String title;
	private String description;

	private String maximumMarks;
	private String noOfQuestion;
	private boolean active = false;
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	@OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Question> questions;

	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Quiz(String title, String description, String maximumMarks, String noOfQuestion, boolean active) {
		super();
		this.title = title;
		this.description = description;
		this.maximumMarks = maximumMarks;
		this.noOfQuestion = noOfQuestion;
		this.active = active;
	}

	public int getqId() {
		return qId;
	}

	public void setqId(int qId) {
		this.qId = qId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getMaximumMarks() {
		return maximumMarks;
	}

	public void setMaximumMarks(String maximumMarks) {
		this.maximumMarks = maximumMarks;
	}

	public Set<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}

	public String getNoOfQuestion() {
		return noOfQuestion;
	}

	public void setNoOfQuestion(String noOfQuestion) {
		this.noOfQuestion = noOfQuestion;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}
