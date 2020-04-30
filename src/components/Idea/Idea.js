import React from 'react';

const Idea = ({ idea, id, deleteIdea }) => {
    console.log(idea, id, deleteIdea )
    return (
        <div>
            <p>{idea}</p>
            <button>Completed</button>
            <button onClick={() => deleteIdea(id)}>Delete</button>
        </div>
    )
}
export default Idea;