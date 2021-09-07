import React from "react";

const Operators = ({elementValues, onClickOperator}) => {
    return <div className="operators">
                {elementValues.map( el => <div key={el}
                 onClick={() => onClickOperator(el)}> {el}
                </div>)}
            </div>
}
export default Operators
