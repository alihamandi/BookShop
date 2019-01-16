import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Routes/main";
import Books from "./Routes/books";
import BooksN from "./Routes/booksN";
import Logged from "./Routes/logged";
import Login from "./Routes/login";
import Register from "./Routes/register";
import Upload from "./Routes/upload";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={localStorage.getItem("token") ? Logged : Main} />
          <Route path="/booksN" component={BooksN} />
          <Route path="/books" component={localStorage.getItem("token") ? Books : BooksN} />
          <Route path="/upload" component={localStorage.getItem("token") ? Upload : Main} />
          <Route path="/register" component={Register} />
          <Route path="/logged" component={localStorage.getItem("token") ? Logged : Main} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
