import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return (
  <>
  <h2>statisics</h2>
        <p>good {good}</p>
        <p>netrual {neutral}</p>
        <p>bad {bad}</p>
        <p>average {((good + bad + neutral) === 0)? 0: (good - bad)/(good + bad + neutral)}</p>
        <p>positive {((good + bad + neutral) === 0)? 0: (good)/(good + bad + neutral)}</p>
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
        <button onClick={handlegood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
     <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App