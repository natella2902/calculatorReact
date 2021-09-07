import React from "react";

const ElementNumbers = ({elementValues, onClickElement}) => {
    return (
        <div className="numbers">
            {elementValues.map( el => <div key={el} onClick={() => onClickElement(el)}> {el} </div>)}
        </div>
    )
}

export default ElementNumbers