import React, { Component } from "react";


class Card extends Component {
  render() {
    console.log("render item");
    return (
      <div className="transition-item detail-page">
        <div onClick={this.goBack.bind(this)}>
          <p style={{ padding: 10, height: 250, backgroundColor: "#FFFF"}}>
            This is a Category. Click here to go back.
          </p>
        </div>
      </div>
    );
  }

  goBack() {
    this.props.history.goBack();
  }
}

export default Card;
