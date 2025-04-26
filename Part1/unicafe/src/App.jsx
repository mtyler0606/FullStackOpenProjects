import { useState } from 'react'

const Button = ({text, handler}) => {
 return(
  <>
  <button onClick={handler}>{text}</button>
  </>
 )
}

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if(total === 0) {
    return(
      <>
      <h2>statistics</h2>
      <p>No feedback given</p>
      </>
    )
  }

  const average = (total === 0)? 0: (good - bad)/total
  const positive = (total === 0)? 0: good/total
  
  return (
  <>
    <h2>statistics</h2>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="total" value={total} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive} />      
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handlegood = () => {
    setGood(good + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  
  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button handler={handlegood} text="good" />
        <Button handler={handleNeutral} text="neutral" />
        <Button handler={handleBad} text="bad" />
      </div>
     <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App