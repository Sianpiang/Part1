
function App() {
  const Hello = ({word})=>{
    console.log(word)
    return(
      <div>
        <p>Hello {word}</p>
      </div>
    )
  }
  return (
    <div className="App">
      <p>Greetings</p>
      <Hello
        word="Friends"
      />
      <Hello
        word="Guys"
      />
      <Hello
        word="Dear"
      />
    </div>
  );
}

export default App;
