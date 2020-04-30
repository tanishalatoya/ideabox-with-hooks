import React from 'react';
import Idea from '../Idea/Idea';

const IdeasContainer = ({ ideas }) => {
    const allIdeas = ideas.map((idea) => {
        return (
            <Idea />
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