import React from "react";
import ElementNumbers from "./elementNumbers";

const LeftPanel = ({onClickElement}) => {

    return  <div className="leftPanel">
                <ElementNumbers onClickElement={onClickElement}
                    elementValues = {[7, 8, 9]}
                />
                <ElementNumbers onClickElement={onClickElement}
                    elementValues = {[4, 5, 6]}
                />
                <ElementNumbers onClickElement={onClickElement}
                    elementValues = {[1, 2, 3]}
                />
                <ElementNumbers onClickElement={onClickElement}
                    elementValues = {[0, '.', 'AC']}
                />
            </div>
}

export default LeftPanel