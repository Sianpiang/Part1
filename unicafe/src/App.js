import { useState } from "react";

const Header = ({heading})=>{
  return(
    <h1>{heading}</h1>
  )
}
const Button = ({handleClick,reviews})=>{
  return(
    <button onClick={()=>handleClick(reviews)}>{reviews}</button> 
  )
}
const Display = ({good,neutral,bad})=>{
  const total = good+neutral+bad;
  const avg = total/3;
  const posi = (good*100)/total
  return(
    <>
      <p>{`Good: ${good} Neutral: ${neutral} Bad: ${bad}`}</p> 
      <p>Total:{total}</p> 
      <p>Average:{avg}</p> 
      <p>Positive %:{posi}</p> 
    </>
  )
}

function App() {
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);

  const handleClick = (btns,e)=>{
    if(btns==="Good"){
      setGood(
        prev=>prev+1
      )
    }
    else if(btns==="Neutral"){
      setNeutral(
        prev=>prev+1
      )
    }
    else{
      setBad(
        prev=>prev+1
      )
    }
  }
  return (
    <div className="App">
      <Header
        heading="Give feedback"
      />
      <Button
        handleClick={handleClick}
        reviews="Good"
      />
      <Button
        handleClick={handleClick}
        reviews="Neutral"
      />
      <Button
        handleClick={handleClick}
        reviews="Bad"
      />
      <Display
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
}

export default App;
