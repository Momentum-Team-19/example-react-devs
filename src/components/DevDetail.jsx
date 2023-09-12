import { useEffect, useState } from 'react'
import axios from 'axios'

const DevDetail = ({ devName, gitHubName }) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${gitHubName}/repos`)
      .then((res) => setRepos(res.data))
      .catch((err) => console.error(err))
  }, [gitHubName])

  return (
    <div className="dev-detail">
      <h1>You selected {devName} </h1>
      <ul>
        {repos &&
          repos.map((repo) => (
            <li>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default DevDetail

// TODO: add a way to go back to the list
// add a back button that sets selectedDev to an empty string
