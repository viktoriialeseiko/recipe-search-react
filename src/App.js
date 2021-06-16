import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Recipe from "./components/Recipe";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      recipes: []
    };
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  getRecipe = async (e) => {
    e.preventDefault();
    const searchItem = this.state.inputValue;
    const api_call = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${searchItem}`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };

  render() {
    const { inputValue, recipes } = this.state;
    return (
      <BrowserRouter>
        <header>Find your recipe</header>
        <div>
          <Switch>
            <Route exact path="/">
              <Form
                getRecipe={this.getRecipe}
                inputValue={inputValue}
                handleChange={this.handleChange}
              />
              <List recipes={recipes} />
            </Route>
            <Route path="/recipe/:id" component={Recipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
