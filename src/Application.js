import React from "react";
import App from "./components/App";
import Apply from "./components/Apply";
// import NotFound from './components/NotFound'
// import AddBook from './components/AddBook'
// import DeleteBook from './components/DeleteBook'
// import Cart from './components/Cart'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Application = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            {console.log("User area")}
            {/* <Route path="/" component={App} /> */}
            <Route path="/projects" component={App} />
            <Route path="/apply/:name/:id" component={Apply} />
            {/* <Route path="/add-book" component={AddBook} />
                    <Route path="/delete-book" component={DeleteBook} />
                    <Route path="/cart" component={Cart} /> */}
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Application;
