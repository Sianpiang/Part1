
function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const Header = ({title})=>{
    return(
      <h1>{title}</h1>
    )
  }
  const Content = ({part1,exercises1,part2,exercises2,part3,exercises3})=>{
    return(
      <>
        <Part
          parts={part1}
          exercises={exercises1}
        />
        <Part
          parts={part2}
          exercises={exercises2}
        />
        <Part
          parts={part3}
          exercises={exercises3}
        />
      </>
    )
  }
  const Part = ({parts,exercises})=>{
    return (
      <p>{parts} : {exercises}</p>
    )
  }
  const Total = ({sum})=>{
    return(
      <p>Number of exercises : {sum}</p>
    )
  }
  return (
    <div className="App">
      <Header
        title={course}
      />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <Total
        sum={exercises1+exercises2+exercises3}
      />
    </div>
  );
}

export default App;
