// import react and ReactDom libraries

import React from "react";
import ReactDom from "react-dom";

// create a react component

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            alt="avatar"
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today 10:00 pm</span>
          </div>
          <div className="text">Nice blog post</div>
        </div>
      </div>
    </div>
  );
};

// take the react component and show on screen

ReactDom.render(<App></App>, document.querySelector("#root"));
