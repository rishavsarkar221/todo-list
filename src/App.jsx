import React, { useState } from 'react';
import List from './List';
import tasks from './TasksData';

const App = () => {
    const [curTask, setTask] = useState();
    const [,setCurTask] = useState();

    const onChange = (event) => {
        setTask(event.target.value);
    }

    const addTask = () => {
        setCurTask(curTask);
        setTask('');
        tasks.push({task: curTask});
        console.log(tasks);
    }

    return(
        <React.Fragment>
            <div className="card" style={{width: '33rem'}}>
                <div className="card-body">

                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Task Name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={onChange} value={curTask} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addTask}>Button</button>
                    </div>
                    </div>

                    <br/>

                    <h4>Tasks</h4>

                    <ul className="list-group">
                        {tasks.map(val => {
                            return <List task={val.task} />
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;