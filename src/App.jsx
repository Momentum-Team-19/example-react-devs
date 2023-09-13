import { useEffect, useState } from 'react'
import axios from 'axios'
import DeveloperCard from './components/DeveloperCard'
import { Loading } from './components/Loading'
import DevDetail from './components/DevDetail'

function App() {
  const [devData, setDevData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDev, setSelectedDev] = useState({})

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
        {!selectedDev.name ? (
          devData.map((dev) => (
            <DeveloperCard
              devId={dev.id}
              name={dev.name}
              gitHub={dev.gitHub}
              key={dev.id}
              setSelectedDev={setSelectedDev}
            />
          ))
        ) : (
          <DevDetail
            devName={selectedDev.name}
            gitHubName={selectedDev.gitHubName}
            setSelectedDev={setSelectedDev}
          />
        )}
      </div>
    </main>
  )
}

export default App

// function getData () {
//   fetch('https://www.url.com', {method: 'GET'}) // returns a Promise
//     .then(function(response){ response.json()})
//     .then(function(data) {console.log(data)}
// }
