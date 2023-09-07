function App() {
  const devs = ['Gavin', 'Jaylan', 'Nathan', 'Chris', 'Davis']

  return (
    <>
      <h1>React Devs for Hire!</h1>
      <div>
        {devs.map((dev, idx) => (
          <p key={idx}>{dev}</p>
        ))}
      </div>
    </>
  )
}

export default App
