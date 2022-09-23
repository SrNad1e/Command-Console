import { useEffect, useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false)

  const onChangeStatus = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    onChangeStatus()
  },[])

  if(loading){
    return (
      <Loading />
    )
  }
  else {
    return ( 
      <Home />
    );
  }
}

export default App;