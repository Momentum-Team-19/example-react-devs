const Developer = ({ name, devId, setSelectedDev, gitHub }) => {
  // {
  //   devId: "3",
  //   name: "Amy",
  //   setSelectedDev: () => {}
  // }

  const handleClick = () => {
    console.log(`You Clicked on ${name}, id ${devId}!`)
    setSelectedDev({ name: name, gitHubName: gitHub })
  }

  return (
    <div
      className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg"
      id={devId}
      onClick={handleClick}
    >
      <h2 key={devId} className="text-lg font-semibold">
        {name}
      </h2>
    </div>
  )
}

export default Developer
