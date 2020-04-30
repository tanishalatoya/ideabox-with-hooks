import React from 'react';
import Idea from '../Idea/Idea';

const IdeasContainer = ({ ideas, deleteIdea }) => {

    const allIdeas = ideas.map((idea) => {
        return (
            <Idea 
                idea={idea.idea}
                key={idea.id}
                id={idea.id}
                deleteIdea={deleteIdea}
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