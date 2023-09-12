import { useEffect, useState } from 'react'
import axios from 'axios'
import Developer from './components/Developer'
import { Loading } from './components/Loading'

function App() {
  const [devData, setDevData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDev, setSelectedDev] = useState('')

  useEffect(() => {
    // make a request to the Devs API for the data about devs to list on the page
    axios
      .get('https://node-api-devs-for-hire.glitch.me/devs')
      .then((response) => {
        setDevData(response.data)
        setLoading(false)
      })
  }, [])
  // useEffect(()=>{}, [])

  if (loading) {
    return <Loading />
  }

  return (
    <main className="container mx-auto">
      <header className="my-9">
        <h1 className="text-3xl font-bold">React Devs for Hire</h1>
      </header>
      <div className="dev-container min-h-screen grid grid-cols-2 gap-4 p-4 bg-slate-200">
        {!selectedDev ? (
          devData.map((dev) => (
            <Developer
              devId={dev.id}
              name={dev.name}
              key={dev.id}
              randomThing={'Hi hi hi'}
              setSelectedDev={setSelectedDev}
            />
          ))
        ) : (
          <DevDetail />
        )}
      </div>
    </main>
  )
}

const DevDetail = () => {
  return <h1>You selected {selectedDev} </h1>
}

export default App

// function getData () {
//   fetch('https://www.url.com', {method: 'GET'}) // returns a Promise
//     .then(function(response){ response.json()})
//     .then(function(data) {console.log(data)}
// }
