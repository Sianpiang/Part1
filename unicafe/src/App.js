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
const Statistic = ({good,neutral,bad,title})=>{
  const total = good+neutral+bad;
  const avg = (good-bad)/total;
  const posi = Math.floor((good*100)/total);
  return(
    <>
      <h2>{title}</h2>
      {good!==0||neutral!=0||bad!==0? 
      <table>
        <tbody>
          <tr>
            <td>
              Good:
            </td>
            <td>
              {good}
            </td>
          </tr>
          <tr>
            <td>
              Neutral:
            </td>
            <td>
              {neutral}
            </td>
          </tr>
          <tr>
            <td>
              Bad:
            </td>
            <td>
              {bad}
            </td>
          </tr>
          <tr>
            <td>
              Total:
            </td>
            <td>
              {total}
            </td>
          </tr>
          <tr>
            <td>
              Average:
            </td>
            <td>
              {avg}
            </td>
          </tr>
          <tr>
            <td>
              Positive%:
            </td>
            <td>
              {posi}
            </td>
          </tr>
        </tbody>
      </table>
      :  <h4>No feedback given</h4>
      }
    </>
  )
}

function App() {
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);

  const handleClick = (btns)=>{
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
      <Statistic
        title="Statistic"
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
}

export default App;
