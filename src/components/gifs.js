import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      title: ''
    }

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://api.giphy.com/v1/gifs/random?api_key=ptfKoWElauf4bgSX8lk5kUAPlLYEu46e')
    .then(res => {
      const url = res.data.data.fixed_width_downsampled_url;
      const title = res.data.data.title;
      this.setState({
        url: url,
        title: title
      });
    })
  }

  render() {
    return (
      <div className="item-content-container">
          <h2>{this.state.title}</h2>
          <img className="gif" src={this.state.url} alt="random-gif" style={{width: '35%'}}/>
          <br />
          <button className="refresh-btn" onClick={this.fetchData}>New GIF!</button>
      </div>
    );
  }
}

export default Item;
