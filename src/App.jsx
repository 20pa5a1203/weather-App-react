import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Error from './Error';
import Weather from './Weather';
import Error404 from './Error404';
import Loader from './Loader';

// const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=081c7cbb1eb464e8c5bf244e8134ecfd`;
function App() {
  const [inp,setInp] = useState("");
  const [err,setErr] = useState(0);
  const [click,setClick] = useState(false);
  const [loading,setLoading] = useState(true);
  const [resdata,setResdata] = useState();


  function search(e){
    setLoading(false);
    e.preventDefault();
    setTimeout(callFetch,1000)
    // callFetch();
    setClick(true);
  }
  
  async function callFetch(){
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=081c7cbb1eb464e8c5bf244e8134ecfd`);
    if(res.ok){
      let data= await  res.json();
      setResdata(data);
      console.log(data);
      setErr(res.status);
      setLoading(true)
    }
    else{
      setErr(res.status);
      console.log(res.status);
      setLoading(true)
    }
    // console.log(res);
  }

  return (
    <>
      <div className="input-field">
      <form onSubmit={search}>
        <input type="text" 
        placeholder='Enter a valid city Name'
        onChange={(e)=>setInp(e.target.value)} />
      </form>
      </div>
      {
        loading?(click && (err>=300?(err==400?<Error/>:<Error404/>):<Weather info={resdata}/>)):<Loader/>
      }
      <div className="owner"><p>Made By <strong>PYDI</strong> ❤️</p></div>
    </>
  )
}

export default App
