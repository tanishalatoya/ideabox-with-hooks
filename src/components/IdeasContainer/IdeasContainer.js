import React from 'react';
import Idea from '../Idea/Idea';

const IdeasContainer = ({ ideas }) => {

    const allIdeas = ideas.map((idea) => {
        return (
            <Idea 
                idea={idea.idea}
                key={idea.id}
                id={idea.id}
            />
        )
    })
    return (
        <section>
            { allIdeas }
        </section>
    )
}

export default IdeasContainer;