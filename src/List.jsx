import React, { useState } from 'react';

const List = (props) => {
    const [display, setDisplay] = useState('block');

    const removeTask = () => {
        setDisplay('none');
    }

    return(
        <React.Fragment>
            <li className="list-group-item" style={{display: display}}>
                <input type="checkbox" />
                <span className="taskName">{props.task}</span>
                <span className="removeTask" onClick={removeTask}>X</span>
            </li>
        </React.Fragment>
    );
}

export default List;