import "./App.css";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import smurfList from "../contexts/smurflistcontext";
import SmurfVillage from "./SmurfVillage";

//adding smurfs works
function App() {
  const [smurfs, setSmurfs]           = useState([])
  const [smurfName, setSmurfName]     = useState('');
  const [smurfAge, setSmurfAge]       = useState(0);
  const [smurfHeight, setSmurfHeight] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(result => {
        setSmurfs(result.data)
    })
    .catch(error => {console.log('caught an error: ',error)})
  }, [])

  return (
    <div className="App">
      <smurfList.Provider value={smurfs}>

        <form onSubmit={(e) => {
          e.preventDefault()
          const newSmurf={
            name: smurfName,
            age: smurfAge,
            height: smurfHeight,
            id: smurfs.length
          }
          axios.post("http://localhost:3333/smurfs", newSmurf)
            .then(res => console.log(res.data))

          }}>
          <h3>Smurf Name</h3>
          <input 
            type="text"
            onChange={(e) => setSmurfName(e.target.value)}
          />
          <h3>Smurf Age</h3>
          <input 
            type="num"
            onChange={(e) => setSmurfAge(e.target.value)}
          />
          <h3>Smurf Height</h3>
          <input
            type="text"
            onChange={(e) => {setSmurfHeight(e.target.value)}}
          />
          <input
            type="submit"
            value="ADD SMURF"
          />
        </form>
        <h1>MY SMURF VILLAGE</h1>
        <SmurfVillage />
      </smurfList.Provider>
    </div>
  );

}

export default App;