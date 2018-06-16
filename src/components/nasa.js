import React, { Component } from 'react';
import axios from 'axios';


        class Nasa extends Component {
            constructor(props){
                super(props);
                this.state = {
                    items: ''
                }
            }
            componentDidMount() {
                axios.get('https://api.nasa.gov/planetary/apod?api_key=OD8Iy8FmkFWpbdKPfgTHIIUDdKm7jP3cNc9Af0TR')
                .then(res => {
                    const items = res.data
                    this.setState({items})
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
            render() {
                console.log(this.state.items)
                return (
                    <div className="item-content-container">
                        <h2>Astronomy Picture of the Day</h2>
                        <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                        <h3><time>{this.state.items.date}</time> <br />{this.state.items.title}</h3>
                        <img src={this.state.items.url} alt={this.state.items.title} style={{width: '75%', minWidth: '350px'}}/>
                        <p style={{padding: '0'}}><small><b>Image Credit & Copyright:</b> {this.state.items.copyright}</small></p>
                        <p><b>Explanation:</b> {this.state.items.explanation}</p>
                  </div>
                );
            }
        }
export default Nasa;