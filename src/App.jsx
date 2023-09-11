import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const devs = ['Gavin', 'Jaylan', 'Nathan', 'Chris', 'Davis']
  const [devData, setDevData] = useState([])
  console.log("we're at the top of the component")

  useEffect(() => {
    console.log('Inside useEffect here')
    // make a request to the Devs API for the data about devs to list on the page
    axios
      .get('https://node-api-devs-for-hire.glitch.me/devs')
      .then((response) => setDevData(response.data))
  }, [])
  // useEffect(()=>{}, [])

  console.log('About to return the html elements for the page')
  return (
    <>
      <h1>React Devs for Hire!</h1>
      <div>
        {devData.map((dev) => (
          <p key={dev.id}>{dev.name}</p>
        ))}
      </div>
    </>
  )
}

export default App

// function getData () {
//   fetch('https://www.url.com', {method: 'GET'}) // returns a Promise
//     .then(function(response){ response.json()})
//     .then(function(data) {console.log(data)}
// }
