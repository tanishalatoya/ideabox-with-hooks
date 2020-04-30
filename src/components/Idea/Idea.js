import React from 'react';

const Idea = ({ idea, id, deleteIdea }) => {    
    return (
        <div>
            <p>{idea}</p>
            <button onClick={() => deleteIdea(id)}>Delete</button>
        </div>
    )
}
export default Idea;