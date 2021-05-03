import components from "./components";
import './App.css';

function App() {
  const { Header, SettleApp } = components;
  return (
    <div className="App">
      <Header />
      <SettleApp />
    </div>
  );
}

export default App;
