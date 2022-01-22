import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css'],
})
export class ViewQuizComponent implements OnInit {
  quiz: any;
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.quizService.getQuiz().subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!', 'server loading error', 'error');
      }
    );
  }
  deleteQuiz(qid: any) {
    this.quizService.deleteQuiz(qid).subscribe(
      (data) => {
        this.ngOnInit();
        Swal.fire('Success!', 'Quiz Deleted ', 'success');
      },
      (error) => {
        Swal.fire('Error!', 'server loading error', 'error');
      }
    );
  }
}
