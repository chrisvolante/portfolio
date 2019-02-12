import React from "react";
import { FaGithub, FaArrowAltCircleUp } from "react-icons/fa";

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
          <img className="image" src={addressbookImage} alt="address-book" />
          <figcaption>
            <h2>Address <span>Book</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/addressbook-client" target="_blank" rel="noopener noreferrer"><span><FaGithub />Repo</span></a>
              <a href="https://cryptic-fortress-69642.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span><FaArrowAltCircleUp />Live</span></a>
            </p>
          </figcaption>
        </figure>
        <figure className="effect-zoe">
          <img className="image" src={budgetImage} alt="budget" />
          <figcaption>
            <h2>Budget <span>App</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/budget-app" target="_blank" rel="noopener noreferrer"><span><FaGithub />Repo</span></a>
              <a href="https://afternoon-anchorage-88698.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span><FaArrowAltCircleUp />Live </span></a>
            </p>
          </figcaption>
        </figure>
        <figure className="effect-zoe">
          <img className="image" src={novacationImage} alt="novacation" />
          <figcaption>
            <h2>No <span>Vacation</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/no-vacation-app" target="_blank" rel="noopener noreferrer"><span><FaGithub />Repo</span></a>
              <a href="https://chrisvolante.github.io/no-vacation-app/" target="_blank" rel="noopener noreferrer"><span><FaArrowAltCircleUp />Live</span></a>
            </p>
          </figcaption>
        </figure>
        <figure className="effect-zoe">
          <img className="image" src={quizImage} alt="quiz" />
          <figcaption>
            <h2>Quiz <span>App</span></h2>
            <p className="icon-links">
              <a href="https://github.com/chrisvolante/budget-app" target="_blank" rel="noopener noreferrer"><span><FaGithub />Repo</span></a>
              <a href="https://chrisvolante.github.io/quiz-app/" target="_blank" rel="noopener noreferrer"><span><FaArrowAltCircleUp />Live</span></a>
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default WorkPage;