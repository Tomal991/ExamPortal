import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css'],
})
export class QuizStartComponent implements OnInit {
  qid: any;
  questions: any;

  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;
  maximumMarks = 0;
  isSubmit = false;
  timer = 0;
  constructor(
    private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.preventBackButton();
    this.loadQuestions();
  }
  loadQuestions() {
    this.questionService.getQuestionsOfQuizForUser(this.qid).subscribe(
      (data) => {
        this.questions = data;
        this.timer = this.questions.length * 2 * 60;
        this.questions.forEach((ques: any) => {
          ques['givenAnswer'] = '';
        });
        this.startTimer();
      },
      (error) => {}
    );
  }
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',

      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.isSubmit = true;
        this.questions.forEach((ques: any) => {
          if (ques.givenAnswer == ques.answer) {
            this.correctAnswer++;
            this.maximumMarks = this.questions[0].quiz.maxMarks;
            let eachQuestionMark = this.maximumMarks / this.questions.length;
            this.marksGot += eachQuestionMark;
          }
          if (ques.givenAnswer.trim() != '') {
            this.attempted++;
          }
        });
        console.log('correctAnswer:' + this.correctAnswer);
        console.log('marks got:' + this.marksGot);
        console.log(this.attempted);
        console.log(this.questions);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.submitQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }
  print(){
    window.print()
  }
}
