import { useState } from 'react'

const Header = () =>{
  return(
    <div>
      <h1>Give Feedback</h1>
    </div>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  const Statistics = (props) =>  {
    if (props.total === 0) {
      return(
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
    return(
    <div>
     <p><b>{props.text}</b> {props.value}</p>
    </div>
    )
  }



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClicks = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + bad + neutral)
    console.log('good clicks', updatedGood)
    console.log('Total Clicks', total)
  }

  const handleNeutralClicks = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + bad + good)
    console.log('Neutral clicks', updatedNeutral)
  }

  const handleBadClicks = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
    console.log('Bad clicks', updatedBad)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClicks} text='Good' />&nbsp;
      <Button handleClick={handleNeutralClicks} text='Neutral' />&nbsp;
      <Button handleClick={handleBadClicks} text='Bad' />
      <div> <h2>Statistics</h2></div>
      <Statistics text="Good" value={good} />
      <Statistics text="Neutral" value={neutral} />
      <Statistics text="Bad" value={bad} />
      <Statistics text="Total:" value={total} />
      <Statistics text="Average:" value={good - bad} />      
      <Statistics text="Positive:" value={`${(good / total) * 100}%`}  />
    </div>
  )
}

export default App