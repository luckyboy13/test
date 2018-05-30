import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Contact from "./Contact";
import Card from "./Card";
class Main extends Component {
    render () {
        return(
        <HashRouter>
            <div>
                <h1>Chingu project</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Categories">Categories</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/item" component={Card} />
                </div>
            </div>
        </HashRouter>
        );
    }
}

export default Main;