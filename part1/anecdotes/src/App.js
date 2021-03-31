import React, { useState } from 'react'

const App = () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  )

  const highestVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        {anecdotes[selected]} <br /> has {votes[selected]} votes
      </p>
      <p>
        <button onClick={() => setSelected(getRndInteger(0, anecdotes.length - 1))}>
          next anecdote
        </button>
        <button onClick={() => {
          const copy = [...votes]
          copy[selected] += 1
          setVotes(copy)
        }}>
          vote
        </button>
      </p>
      <h2>Anecdote with most votes</h2>
      <p>
        {anecdotes[highestVotes]} <br /> has {votes[highestVotes]} votes
      </p>
    </div>
  )
}

export default App