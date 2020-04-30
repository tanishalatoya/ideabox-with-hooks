import React from 'react';
import Idea from '../Idea/Idea';

const IdeasContainer = ({ ideas }) => {

    const allIdeas = ideas.map((idea) => {
        console.log(idea)
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
            <ul>
                { allIdeas }
            </ul>
        </section>
    )
}

export default IdeasContainer;