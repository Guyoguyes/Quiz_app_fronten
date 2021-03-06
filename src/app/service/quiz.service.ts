import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EndpointService } from "./endpoint.service";
import { Quiz } from "../models/quiz";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  quiz: [];
  seconds: number;
  duration;
  qnProgress: number;

  private_url: "https://quizzzin.herokuapp.com/";

  constructor(private http: HttpClient, private endpoint: EndpointService) {}

  displayTimeElapsed() {
    return (
      Math.floor(this.seconds / 3600) +
      ":" +
      Math.floor(this.seconds / 60) +
      ":" +
      Math.floor(this.seconds % 60)
    );
  }
  // insertParticipant(username: string, email: string) {
  //   var body = {
  //     Name: username,
  //     Email: email
  //   }
  //   return this.http.post(this.private_url, body);
  // }

  getQuizes() {
    return this.http.get(environment.quizApi + "quizzes/");
  }

  createQuiz(quizz) {
    return this.http.post(environment.quizApi + "quizzes/", quizz)
  }

  submitScore(answers: any) {
    return this.http.post(environment.quizApi + "attempt/", answers);
  }
}
