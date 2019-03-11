import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Cars.css";

class Car extends Component {
  state = {
    seeMoreInfo: false
  };
  handleInfo = () => {
    this.setState({
      seeMoreInfo: !this.state.seeMoreInfo
    });
  };
  render() {
    const {
      img,
      name,
      infoOne,
      imgOne,
      imgTwo,
      infoTwo,
      imgThree,
      imgFour,
      infoThree
    } = this.props.car;
    const { seeMoreInfo } = this.state;
    return (
      <div>
        <div className="carLook">
          <Image src={img} roundedCircle fluid />
          <h3>{name}</h3>
          <p>{infoOne}</p>
          <h5 onClick={this.handleInfo}>see more</h5>
        </div>
        {seeMoreInfo ? (
          <div className="moreInfo">
            <Image
              style={{ float: "left", width: "47%", padding: "5px 5px" }}
              src={imgOne}
              fluid
            />
            <Image
              style={{ float: "left", width: "47%", padding: "5px 5px" }}
              src={imgTwo}
              fluid
            />
            <p style={{ textAlign: "justify", padding: "5px" }}>{infoTwo}</p>
            <Image
              style={{ float: "left", width: "47%", padding: "5px 5px" }}
              src={imgThree}
              fluid
            />
            <Image
              style={{ float: "left", width: "47%", padding: "5px 5px" }}
              src={imgFour}
              fluid
            />
            <p style={{ textAlign: "justify", padding: "5px" }}>{infoThree}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Car;
