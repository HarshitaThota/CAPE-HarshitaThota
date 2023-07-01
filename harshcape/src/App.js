import React from 'react';
import ReactDOM from 'react-dom';
import Perky from './Perky';
import me from "./me.jpeg";
import brosita from "./brosita.jpeg";

const person = [{
  name: "Harshii",
  email: "hthota3@illinois.edu",
  age: "19",
  emoji: me,
},
{
  name:"Grandpa",
  email:"coolpaw@gmail.com",
  age: "69",
  emoji:brosita,
}]

function App() {
return <Perky users={person}/>

}

export default App;
