import './App.css';

const SomeComponent = ({ children }) => {
  return <div>{children}</div>;
};

function App() {
  let a = 100;
  return (
    <div className="App">
      {a ? <h1>a {100 + 100}</h1> : 10}
      {/* <p>sss</p> */}
      <SomeComponent>Text</SomeComponent>
    </div>
  );
}

export default App;
