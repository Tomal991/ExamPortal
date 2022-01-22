package com.example.ExamPortal.Backend.controller;

import com.example.ExamPortal.Backend.model.exam.Category;
import com.example.ExamPortal.Backend.model.exam.Quiz;
import com.example.ExamPortal.Backend.service.CategoryService;
import com.example.ExamPortal.Backend.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {

        return ResponseEntity.ok(quizService.addQuiz(quiz));
    }

    @GetMapping("/{qid}")
    public ResponseEntity<?> getQuiz(@PathVariable("qid") Long qid) {
        Quiz quiz = quizService.getQuiz(qid);
        return ResponseEntity.ok(quiz);
    }

    @GetMapping("/")
    public ResponseEntity<?> getQuizzes() {
        return ResponseEntity.ok(quizService.getQuizzes());
    }

    @PutMapping("/")
    public ResponseEntity<?> updateQuiz(@RequestBody Quiz quiz) {
        Quiz quiz1 = quizService.updateQuiz(quiz);
        return ResponseEntity.ok(quiz1);
    }

    @DeleteMapping("/{qid}")
    public void deleteQuiz(@PathVariable("qid") Long qid) {
        quizService.deleteQuiz(qid);
    }
}
