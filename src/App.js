import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {
    const enterKey = 13
    const escKey = 27


    const [tasks, setTasks] = useState([])
    const [value, setValue] = useState('')

    const erase = () => {
        setValue('')
    }

    const submit = () => {

        setTasks([...tasks, { id: new Date().getTime(), title: value, checked: true}]);

        erase()
    }

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.which === enterKey){
            submit()
        } else if (event.which === escKey){
            erase()
        }
    }

    return(
        <section id='app' className='clcontainer'>
            <header>
                <h1 className='title'>TO.DO!</h1>
            </header>
            <section className='main'>
                <input className='new-task' placeholder='insira uma nova tarefa' value={value} onChange={onChange} onKeyDown={onKeyDown} />
                <ul className='task-list'>
                    {tasks.map((task) => (
                            <li key={task.id.toString()}>
                                <span className='task'>
                                    {task.title}
                                </span>
                                <buttton className="remove" type="button"><MdDelete size={28} /></buttton>
                            </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}


export default App;
