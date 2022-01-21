package com.example.ExamPortal.Backend.controller;

import com.example.ExamPortal.Backend.model.exam.Category;
import com.example.ExamPortal.Backend.model.exam.Question;
import com.example.ExamPortal.Backend.model.exam.Quiz;
import com.example.ExamPortal.Backend.service.QuestionService;
import com.example.ExamPortal.Backend.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<?> addQuestion(@RequestBody Question question) {
        Question question1 = questionService.addQuestion(question);
        return ResponseEntity.ok(question1);
    }

    @PutMapping("/")
    public ResponseEntity<?> updateQuestion(@RequestBody Question question) {
        Question question1 = questionService.updateQuestion(question);
        return ResponseEntity.ok(question1);
    }

    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") Long qid) {
        Quiz quiz = quizService.getQuiz(qid);
        Set<Question> questions = quiz.getQuestions();
        List list = new ArrayList<>(questions);
        if (list.size() > Integer.parseInt(quiz.getNumberOfQuestions())) {
            list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions() + 1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{quesid}")
    public ResponseEntity<Question> getQuestion(@PathVariable("quesid") Long quesid) {

        return ResponseEntity.ok(questionService.getQuestion(quesid));
    }

    @DeleteMapping("/{quesid}")
    public void deleteQuestion(@PathVariable("quesid") Long quesid) {
        questionService.deleteQuestion(quesid);
    }

}
