import React, { Component } from "react";
import CarData from "./carData";
import Car from "./Car"

class Cars extends Component {
  state = {
      cars: CarData
  };
  render() {
    return (
      <section className="carList">
        {this.state.cars.map(car => (
            <Car key={car.id} car={car} />
        ))}
      </section>
    );
  }
}

export default Cars;
