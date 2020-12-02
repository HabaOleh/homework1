import React, {Component} from 'react';
import "./Car.css";

class CarComponent extends Component {
    render() {
        let {item,carStyle} = this.props;
        return (
            <div className={carStyle}>
                Model: {item.model} Year: {item.year} Color: {item.color} Driver: {item.driver.Name} Age: {item.driver.age} Experience {item.driver.experience} Sex: {item.driver.sex}
            </div>
        );
    }
}

export default CarComponent;