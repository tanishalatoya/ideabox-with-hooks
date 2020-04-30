import React from 'react';
import IdeaForm from './IdeaForm/IdeaForm';
import IdeasContainer from './IdeasContainer/IdeasContainer';
import './App.css';

const App = () => {
  return (
    <main>
      <h1>Ideabox with Hooks</h1>
      <IdeaForm />
      <IdeasContainer />
    </main>
  )
}

export default App;
