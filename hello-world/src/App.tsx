import React, { useState } from 'react';
import  Hello from "./components/Hello";

function App() {
  const [name] = useState<string | null>('Peter');
  return (
    <Hello message={ `I am ${ name }!` }></Hello>
  );
}

export default App;
