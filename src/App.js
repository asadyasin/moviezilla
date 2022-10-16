import './App.css';
const App = () => {
  const name = "Asad Yasin";
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : "Phudo"}</h1>
      {isNameShowing ? (<>
            Hello
          <h1>Khallo</h1>

        </>):(
          <>
          
          <h1>Khallo</h1>
          <h1>Khallo</h1>
          </>
        )
        }
    </div>
  );
}

export default App;
