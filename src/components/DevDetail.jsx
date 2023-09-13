import { useEffect, useState } from 'react'
import axios from 'axios'

const DevDetail = ({ devName, gitHubName, setSelectedDev }) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${gitHubName}/repos`)
      .then((res) => setRepos(res.data))
      .catch((err) => console.error(err))
  }, [gitHubName])

  const handleGoBack = () => {
    // to "go back" just means to reset the state for selectedDev
    // I'm setting it back to its default value, which is an empty object
    setSelectedDev({})
  }

  return (
    <div className="dev-detail">
      <div>
        <button
          onClick={handleGoBack}
          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Back to All Devs
        </button>
      </div>
      <h1>You selected {devName} </h1>
      <ul>
        {repos &&
          repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default DevDetail
