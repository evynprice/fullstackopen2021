import React, { useState } from 'react'

const Button = ({ name, action }) => {
  return (
    <button onClick={action} >
      {name}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = (good + (bad * -1)) / all
  const positive = good / all

  if (all === 0) {
    return (
      <div>
        <h2>give feedback</h2>
        <Button name={'good'} action={() => setGood(good + 1)} />
        <Button name={'neutral'} action={() => setNeutral(neutral + 1)} />
        <Button name={'bad'} action={() => setBad(bad + 1)} />
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <>
      <h2>give feedback</h2>
      <Button name={'good'} action={() => setGood(good + 1)} />
      <Button name={'neutral'} action={() => setNeutral(neutral + 1)} />
      <Button name={'bad'} action={() => setBad(bad + 1)} />
      <h2>statistics</h2>

      <table >
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </>
  )
}

export default App