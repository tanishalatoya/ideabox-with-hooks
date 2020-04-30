import React, { useState } from 'react';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeasContainer from '../IdeasContainer/IdeasContainer';
import './App.css';

const App = () => {

  const [ideas, setIdeas] = useState([])

  const addIdea = idea => {
    const newIdeas = [...ideas, { 
      idea: idea, 
      id: Date.now()
    }];
    setIdeas(newIdeas)
  }

  const deleteIdea = id => {
    const updatedIdeas = ideas.filter(idea => id !== idea.id)
    setIdeas(updatedIdeas)
  }

  return (
    <main>
      <h1>Ideabox with Hooks</h1>
      <IdeaForm addIdea={addIdea}/>
      <IdeasContainer 
        ideas={ideas}
        deleteIdea={deleteIdea} />
    </main>
  )
}

export default App;
