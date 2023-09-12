const Developer = ({ devId, name }) => {
  return (
    <div
      className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg"
      id={devId}
    >
      <h2 key={devId} className="text-lg font-semibold">
        {name}
      </h2>
    </div>
  )
}

export default Developer
