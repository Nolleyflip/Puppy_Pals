import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { puppyList } from './puppydata'
import './App.css'

function App() { 
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
 
  const clickHandler = (id) => {
    setFeatPupId(id)

  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <>

          {
      featPupId && (<div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )
    }
      {puppies.map((puppy) => {
        return <p  onClick={()=>clickHandler(puppy.id)} key={puppy.id}>{puppy.name}</p>
   })}
    </>
  )
}

export default App


// 0
// null
// undefined
// ""
// false

