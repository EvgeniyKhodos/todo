import React from "react";
import yesImage from '../assets/images/Yes.jpg';
import noImage from '../assets/images/No.png';

const Task = ({task, ...props}) => {

    const  ActionBtn = () => (
        <div className="action-btn">
            {!task.done
                ? ( <p onClick={props.doneTask}> <img src={yesImage}/> </p>)
                : ( <p onClick={props.deleteTask}> <img src={noImage}/> </p>
            )}
        </div>
    );

    const className = 'task ' + (task.done ? 'task-done' : '');

    return (
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    );
};

export default Task;