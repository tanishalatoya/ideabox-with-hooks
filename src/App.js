import React, { useState } from 'react';
import IdeaForm from './IdeaForm/IdeaForm';
import IdeasContainer from './IdeasContainer/IdeasContainer';
import './App.css';

const App = () => {
  const [ideas, addIdea] = useState([])
  return (
    <main>
      <h1>Ideabox with Hooks</h1>
      <IdeaForm addIdea={addIdea}/>
      <IdeasContainer ideas={ideas} />
    </main>
  )
}

export default App;
