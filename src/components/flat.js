import React from "react";
import "./flat.css";

class Flat extends React.Component {

    handleClick = () => {
        // Call parent method selectFlat
        this.props.selectFlat(this.props.flat);
    }

    render () {
        const title = `${this.props.flat.price}${this.props.flat.priceCurrency} - 
            ${this.props.flat.name}`;

        const style = {
            backgroundImage: `url('${this.props.flat.imageUrl}')`
        };

        return (
            <div className="flat" onClick={this.handleClick}>
                <div className="flat__picture" style={style}></div>
                <div className="flat__title">{title}</div>
            </div>
        );
    }
}

export default Flat;