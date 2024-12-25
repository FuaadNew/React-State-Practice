import { useState } from "react"

const Button = ({onClick,name}) =>{
  return (
    <button onClick= {()=>onClick(name)}>{name}</button>
  )
}

const Display = ({stringName,name}) =>{
  return (
    <div>{stringName} {name}</div>
  )
}



const App = () =>{

  const handleClick = (name) =>{
    if (name === "good"){
      setGood(good+1)
     
    }else if (name === "neutral"){
      setNeutral(neutral+1)
      
    }else if (name === "bad"){
      setBad(bad+1)
    }

  }




  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  return <div>
    <h1>give feedback</h1>
    <Button onClick= {handleClick} name = "good">good</Button>
    <Button onClick= {handleClick} name = "neutral">neutral</Button>
    <Button onClick= {handleClick} name = "bad">bad</Button>
    <h1>statistics</h1>
    <Display stringName="good"name ={good} ></Display>
    <Display stringName="neutral"name ={neutral} ></Display>
    <Display stringName="bad"name ={bad} ></Display>
  </div>
  

}





export default App