import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quiz=new FormControl('');
  question=new FormControl('');
  answer1=new FormControl('');
  answer2=new FormControl('');
  answer3=new FormControl('');
  answer4=new FormControl('');
  answer5=new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

}
