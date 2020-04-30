import React from 'react';

const Idea = ({ idea }) => {
    return (
        <div>
            <p>{idea}</p>
            <button>Completed</button>
            <button>Delete</button>
        </div>
    )
}
export default Idea;