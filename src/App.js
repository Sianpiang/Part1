
function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Header = ({title})=>{
    return(
      <h1>{title}</h1>
    )
  }
  const Content = ({parts})=>{
    return(
      <>
        <Part
          name={parts[0].name}
          exercises={parts[0].exercises}
        />
        <Part
          name={parts[1].name}
          exercises={parts[1].exercises}
        />
        <Part
          name={parts[2].name}
          exercises={parts[2].exercises}
        />
      </>
    )
  }
  const Part = ({name,exercises})=>{
    return (
      <p>{name} : {exercises}</p>
    )
  }
  const Total = ({parts})=>{
    return(
      <p>Number of exercises : {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
    )
  }
  return (
    <div className="App">
      <Header
        title={course.name}
      />
      <Content
        parts={course.parts}
      />
      <Total
        parts={course.parts}
      />
    </div>
  );
}

export default App;
