import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      advice: ''
    }

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://api.adviceslip.com/advice')
    .then(res => {
      const advice = res.data.slip.advice;
      this.setState({advice});
    })
  }

  render() {
    return (
      <div className="item-content-container">
          <h2>Your random advice!</h2>
          <p className="random-advice">
            {this.state.advice}
          </p>
          <button className="refresh-btn" onClick={this.fetchData}>Get new advice!</button>
      </div>
    );
  }
}

export default Item;
