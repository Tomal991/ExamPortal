package com.example.ExamPortal.Backend.repository;

import com.example.ExamPortal.Backend.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz,Long> {
}
