import React, { useState } from 'react';
import './App.css';

const App = () => {
    const enterKey = 13
    const escKey = 27

    const [value, setValue] = useState('')

    const erase = () => {
        setValue('')
    }

    const submit = () => {
        alert(value)
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
            </section>
        </section>
    );
}


export default App;
