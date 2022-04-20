import { useState } from 'react'
import TaskItems from '../taskItems/TaskItems'

export default function InputForm({ handleSubmit }) {
    const [input, setInput] = useState('')
    const handleChange = (evt) => {
        setInput(evt.target.value)
    }

    const handleForm = async (evt) => {
        evt.preventDefault();
        try {
            const res = await fetch('/api/tasks', {
                headers: {
                    'Content-Type':'application/json'
                },
                method: 'POST', 
                body: JSON.stringify({entry:input, status:"To-Do"})
            })
            const data = await res.json()
            console.log(data)
            handleSubmit(input);
            setInput('');
        } catch (err) {
            console.error(err)
       }
    }

    return (
        <>
            <p> New Item</p>
            <form onSubmit={handleForm}>
                <input className='add' type='text' placeholder='add new task' value={input}
                    onChange={handleChange} />
            </form>
        </>
    )
}