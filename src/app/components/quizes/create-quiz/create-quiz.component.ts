import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  
  title=new FormControl('');
  description=new FormControl('');
  duration=new FormControl('');
  questions=new FormControl('');
  

  constructor() { }

  ngOnInit(): void {
  }

}
