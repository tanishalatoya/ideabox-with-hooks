import React, { useState } from 'react';

const IdeaForm = ({ addIdea }) => {

    const [idea, setIdea] = useState('')

    const handleChange = e => {
        setIdea(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='My idea is...'
                onChange={handleChange}
                />
            <button>
                Add Idea
            </button>
        </form>
    )
}

export default IdeaForm;