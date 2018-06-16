import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Header from './header'
import Home from './home'
import Footer from './footer'
import Advice from './random-advice'
import Gif from './gifs'
import Nasa from './nasa'
import Decision from './decision'

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div className="main-container">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/advice' component={Advice} />
                        <Route path='/Astronomy Picture of the Day' component={Nasa} />
                        <Route path='/Decision' component={Decision} />
                        <Route path='/Gif' component={Gif} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
