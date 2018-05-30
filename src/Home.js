import React, { Component } from "react";

class Home extends Component {
    render() {
      console.log("render list");
      let arr = ["Music", "Movies", "Entertainment", "Sports"];
      let listItems = arr.map((item, index) => {
        return (
          <div
            key={index}
            onClick={this.goToItem.bind(this)}
            style={{ padding: 10, height: 250, margin: 20, backgroundColor: "#FFFF"}}
            className="card-page"
          >
            This is a paragraph - {item}
          </div>
        );
      });
      return <div className="transition-item list-page">{listItems}</div>;
    }
  
    goToItem() {
      this.props.history.push({
        pathname: "/item"
      });
    }
  }
 
  export default Home;