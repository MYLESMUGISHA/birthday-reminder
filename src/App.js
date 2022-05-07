import React from 'react'
import birthday from './data'
import List from './List'
import { useState } from 'react';

function App() {
  const [details, setDetails]= useState(birthday)
  function removeBtn(){
    setDetails([])
  }
  console.log(birthday.id)
  return (
    

    <main>
      <section className='container'>
      

        <h3> Today birthday number are:  {birthday.length}</h3>
        {/* display our component here */}

  <List receivedData ={details}/>
  
  <button onClick={removeBtn}>clear all</button>  
      </section>
    </main>
  )
}

export default App
