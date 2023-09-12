import { useEffect, useState } from 'react'
import axios from 'axios'

const DevDetail = ({ devName }) => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    axios
      .get('https://api.github.com/users/Davis-Patterson/repos')
      .then((res) => setRepos(res.data))
  })

  return (
    <div className="dev-detail">
      <h1>You selected {devName} </h1>
      {repos.map((repo) => (
        <p>{repo.name}</p>
      ))}
    </div>
  )
}

export default DevDetail

// TODO: add a way to go back to the list
// add a back button that sets selectedDev to an empty string
