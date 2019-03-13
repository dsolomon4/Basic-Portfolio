import React, { Component } from 'react';
export default class Portfolio extends Component {
render() {
return (
<React.Fragment>
<div>
        {/* Crystal Game */}
        <div className="portfolio-pics" id="crystal-game">
          <img src="assets\images\crystal_game.png" alt="Crystal Game" />
          <a className="btn btn-primary" href="https://dsolomon4.github.io/unit-4-game/" target="_blank" role="button"> View Application </a>
          <a className="btn btn-primary" href="https://github.com/dsolomon4/unit-4-game" target="_blank" role="button"> View Code </a>
        </div>
        {/* Friend Finder */}
        <div className="portfolio-pics" id="friend-finder">
          <img src="assets/images/friend_finder.png" alt="Friend Finder App" />
          <a className="btn btn-primary" href="https://friend-finder-by-ds.herokuapp.com/" target="_blank" role="button"> View Application </a>
          <a className="btn btn-primary" href="https://github.com/dsolomon4/friend_finder" target="_blank" role="button"> View Code </a>  
        </div>
        {/* Trivia Game */}
        <div className="portfolio-pics" id="triva-game">
          <img src="assets/images/trivia_game.png" alt="Trivia Game" />
          <a className="btn btn-primary" href="https://dsolomon4.github.io/TriviaGame/" target="_blank" role="button"> View Application </a>
          <a className="btn btn-primary" href="https://github.com/dsolomon4/TriviaGame" target="_blank" role="button"> View Code </a>  
        </div>
      </div>
</React.Fragment>
);
}
}