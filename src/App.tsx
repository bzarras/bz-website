import React from 'react';
import './App.css';
import { Layout } from './Layout';
import { contentData } from './contentData';

function App() {
  return (
    <Layout contents={contentData} />
  );
}

export default App;
