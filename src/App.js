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

        setTasks([...tasks, { id: new Date().getTime(), title: value, checked: false}]);

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

    const onToggle = (task) => {
        setTasks(
            tasks.map((obj) => (obj.id === task.id ? { ...obj, checked: !task.checked } : obj))
        );
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
                                <span className={['task', task.checked ? 'checked' : ''].join(' ')} onClick={() => onToggle(task)} role='button' tabIndex={0}>
                                    {task.title}
                                </span>
                                <button className="remove" type="button"><MdDelete size={28} /></button>
                            </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}


export default App;
