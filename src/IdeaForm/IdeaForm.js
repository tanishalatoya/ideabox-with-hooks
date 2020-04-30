import React, { useState } from 'react';

const IdeaForm = ({ addIdea }) => {

    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addIdea(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='My idea is...'
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            <button>
                Add Idea
            </button>
        </form>
    )
}

export default IdeaForm;