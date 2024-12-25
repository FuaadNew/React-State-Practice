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
const Total = ({good,neutral,bad}) =>{
  return (
    <div>all {good + neutral + bad}</div>
  )

}

const Statistics = ({good,neutral,bad}) =>{
  return (
    <div>
  <Display stringName="good"name ={good} ></Display>
    <Display stringName="neutral"name ={neutral} ></Display>
    <Display stringName="bad"name ={bad} ></Display>
    <Total good = {good} neutral={neutral} bad = {bad}></Total>
    <Average good = {good} neutral={neutral} bad = {bad}></Average>
    <Positive good = {good} neutral={neutral} bad = {bad}></Positive>
    </div>
  );

}

const Average = ({good,neutral,bad}) =>{
  const total = good - bad
  const allFeedback = good + neutral + bad
  const average = allFeedback ? total / allFeedback : 0
  return (

    <div>Average {average}</div>
  )
}


const Positive = ({good,neutral,bad}) =>{
  const allFeedback = good + neutral + bad
  const posPercentage = allFeedback ? (good/ allFeedback) * 100: 0

  return (
    <div>positive {posPercentage} %</div>
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
    <Statistics good = {good} neutral = {neutral} bad = {bad}></Statistics>
    
  </div>
  

}





export default App