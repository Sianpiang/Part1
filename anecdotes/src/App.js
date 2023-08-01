import { useState } from 'react'

const MostVote = ({mVotes,nVotes})=>{
  return(
    <>
      <h2>Anecdotes with most votes</h2>
      <p>{mVotes}</p>
      <p>Votes: {nVotes}</p>
    </>
  )
}
const Anecdotes = ({anecdote,vote})=>{
  return(
    <>
      <p>{anecdote}</p>
      <p>Votes: {vote}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes,setVotes] = useState([1,2,10,4,6,5,2]);
  const [selected, setSelected] = useState(0)
  let most =votes.indexOf(Math.max(...votes))
  const handleClick =()=>{
  const random = Math.floor(Math.random()*7)
  setSelected(random)
  }
  const handleVote = ()=>{
    const count = [...votes]
    count[selected]+=1
    setVotes(count)
  }

  return (
    <div>
      <Anecdotes
        anecdote={anecdotes[selected]}
        vote={votes[selected]}
      />
      <button onClick={()=>handleClick()}>Next anecdotes</button>
      <button onClick={()=>handleVote()}>Vote</button>
      <MostVote
        mVotes={anecdotes[most]}
        nVotes={votes[most]}
      />
    </div>
  )
}

export default App