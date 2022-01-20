package com.example.ExamPortal.Backend.service;

import com.example.ExamPortal.Backend.model.exam.Category;
import com.example.ExamPortal.Backend.model.exam.Quiz;

import java.util.Set;

public interface QuizService {
    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(Long qid);

    public void deleteQuiz(Long qid);
}
