import React from 'react';
import './App.css';

function App() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function getData(){
      const resolve = await fetch("http://localhost:5000/")

      const response = await resolve.json()

      setData(response)
    }

    getData()
  }, [])


  return data ? <p>{data.message}</p> : null
}

export default App;
