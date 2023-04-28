import React, { useState } from 'react';

import choice from './choice';
import defaultAnswers from './defaultAnswers';
import styles from './EightBall.css';



const EightBall = ({ answers = defaultAnswers }) => {

    const [ message, setMessage ] = useState("Think of a Question");
    const [ color, setColor ] = useState("black");

    const changeBall = () => {

        const { msg, color } = choice(answers);

        setMessage(msg);
        setColor(color);
    }

    const colors = { 
        backgroundColor: color,
        color: "white"
    };

    return (
        <div className="EightBall" style={colors} onClick={() => changeBall()}>
            <header className="EightBall-message">{ message }</header>
        </div>
    )
}

export default EightBall;