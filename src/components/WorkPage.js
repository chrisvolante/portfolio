import React from "react";

import "./WorkPage.css";
import novacationImage from "../images/novacation-image.png";
import budgetImage from "../images/budget-image.png";
import addressbookImage from "../images/addressbook-image.png";
import quizImage from "../images/quiz-image.png";

const WorkPage = () => {
  return (
    <div className="content">
      <div className="grid">
        <figure className="effect-zoe">
          <img src={addressbookImage} alt="address-book-image" />
          <figcaption>
            <h2>Address <span>Book</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/addressbook-client"><span className="icon-heart">Repo</span></a>
              <a href="https://cryptic-fortress-69642.herokuapp.com/"><span className="icon-eye">Live</span></a>
            </p>
            <p className="description">Keep all your contacts in one place and accessible on any device.</p>
          </figcaption>
        </figure>
        <figure className="effect-zoe">
          <img src={budgetImage} alt="budget-image" />
          <figcaption>
            <h2>Budget <span>App</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/budget-app"><span className="icon-heart">Repo</span></a>
              <a href="https://afternoon-anchorage-88698.herokuapp.com/"><span className="icon-eye">Live</span></a>
            </p>
            <p className="description">Budget App lets you keep track of daily spending!</p>
          </figcaption>
        </figure>
        <figure className="effect-zoe">
          <img src={novacationImage} alt="novacation-image" />
          <figcaption>
            <h2>No <span>Vacation</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/no-vacation-app"><span className="icon-heart">Repo</span></a>
              <a href="https://chrisvolante.github.io/no-vacation-app/"><span className="icon-eye">Live</span></a>
            </p>
            <p className="description">No Vacation takes your mind elsewhere when your body is stuck at work..</p>
          </figcaption>
        </figure>
        <figure className="effect-zoe">
          <img src={quizImage} alt="quiz-image" />
          <figcaption>
            <h2>Quiz <span>App</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/budget-app"><span className="icon-heart">Repo</span></a>
              <a href="https://chrisvolante.github.io/quiz-app/"><span className="icon-eye">Live</span></a>
            </p>
            <p className="description">Test your musical knowledge on some of the Hits from 2018!</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default WorkPage;