import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class Decision extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ''
          }
          this.fetchData = this.fetchData.bind(this)
        }
        componentDidMount() {
            this.fetchData();
          }
        fetchData(){
          axios.get('https://yesno.wtf/api/')
          .then(res => {
            console.log(res)
            const data = res.data
            this.setState({data})
          }).catch(error => {
            console.log(error)
          })
        }
    render() {
        return (
            <div className="item-content-container">
                <h2>Decision maker</h2>
                <img src={this.state.data.image} alt='gif' style={{width: '55%'}}/>
                <h1 style={{padding:'20px'}}>{this.state.data.answer}</h1>
                <button className="refresh-btn" onClick={this.fetchData}>Try again!</button>
            </div>
        );
    }

}



export default Decision;