

import {useState} from 'react'

const Display = ({counter}) => (<div>{counter}</div>)


const Button = ({onClick,text}) =>(<button onClick={onClick}>{text}</button>)



const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne= () => setCounter(counter-1)
  const setToZero = () => setCounter(0)
  

  




  

  console.log('rendering...', counter)

  return (
    <div>
    <Display counter = {counter}></Display>
    <Button onClick = {increaseByOne} text ="plus"></Button>
    <Button onClick = {decreaseByOne} text ="minus"></Button>
    <Button onClick = {setToZero} text = "zero"></Button>
    </div>
  )
}


export default App