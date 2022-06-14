import questions from "./question.js";

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
    this.answered = false;
  }

  answerQuestion(id) {
    if (!this.answered) {
      this.answered = true;
      document.querySelector(".next-question").style.display = "unset";
      const answer = document.querySelector(`#${id}`);
      if (answer.innerText === this.questions[this.questionIndex].answer) {
        this.score++;
        answer.style.backgroundColor = "#00FF00";
      } else {
        answer.style.color = "#FFFFFF";
        answer.style.backgroundColor = "#FF0000";
      }
    }
  }

  _resetProperties() {
    this.answered = false;
    this.questionIndex++;
    const nextQuestion = document.querySelector(".next-question");
    nextQuestion.style.display = "none";
    const answers = document.querySelectorAll(".answer");
    for (let i = 0; i < answers.length; i++) {
      answers[i].style.color = "#000000";
      answers[i].style.backgroundColor = "#FFFFFF";
    }
    if (this.questionIndex === 9) nextQuestion.innerText = "Submit quiz";
  }

  nextQuestion() {
    this._resetProperties();
    if (this.questionIndex < 10) {
      const question = document.querySelector(".question");
      question.innerText = this.questions[this.questionIndex].question;
      const questionNumber = document.querySelector(".question-number");
      questionNumber.innerText = `Question ${this.questionIndex + 1} of 10`;
      const answers = document.querySelectorAll(".answer");
      for (let i = 0; i < answers.length; i++) {
        answers[i].innerText = this.questions[this.questionIndex].answers[i];
      }
    } else {
      this.endQuiz();
    }
  }

  _shuffleQuestions() {
    const shuffled = [];
    const max = this.questions.length;
    for (let i = 0; i < max; i++) {
      const index = Math.floor(Math.random() * this.questions.length);
      shuffled.push(this.questions[index]);
      this.questions.splice(index, 1);
    }
    this.questions = shuffled;
    console.log(this.questions);
  }

  startQuiz() {
    this._shuffleQuestions();
    const question = document.querySelector(".question");
    question.innerText = this.questions[this.questionIndex].question;
    const questionNumber = document.querySelector(".question-number");
    questionNumber.innerText = `Question ${this.questionIndex + 1} of 10`;
    const answers = document.querySelectorAll(".answer");
    for (let i = 0; i < answers.length; i++) {
      answers[i].innerText = this.questions[this.questionIndex].answers[i];
    }
  }

  endQuiz() {
    const hidden = document.querySelectorAll(
      "body :not(h1, .return-home, .message)"
    );
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "none";
    }
    const message = document.querySelector(".message");
    message.style.display = "block";
    if (this.score === 10) {
      message.innerText =
        "Congratulations! You passed the quiz with a perfect score.";
    } else if (this.score >= 8) {
      message.innerText = `Congratulations! You passed the quiz with ${this.score} of the 10 questions correct.\nCan you score even better?`;
      const retakes = document.querySelectorAll(".retake");
      for (let i = 0; i < retakes.length; i++) {
        retakes[i].style.display = "unset";
      }
    } else {
      message.innerText = `Unfortunately, you didn't pass the quiz. You need a score of at least 8 to pass, but you only answered ${this.score} of the 10 questions correctly.\nReview the video to learn more about how the brain works, or retake the quiz.`;
      document.querySelector(".return-home .return-home").innerText =
        "Review video";
      const retakes = document.querySelectorAll(".retake");
      for (let i = 0; i < retakes.length; i++) {
        retakes[i].style.display = "unset";
      }
    }
  }
}

const quiz = new Quiz(questions);
const answers = document.querySelectorAll(".answer");
for (let i = 0; i < answers.length; i++) {
  answers[i].onclick = function () {
    quiz.answerQuestion(answers[i].id);
  }.bind(quiz);
}
document.querySelector(".next-question").onclick = quiz.nextQuestion.bind(quiz);
quiz.startQuiz();
