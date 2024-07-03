import "./App.css";
import { Stars } from "./components/Stars";

function App() {
  return (
    <div>
      <Stars
      count = {Math.floor(Math.random()*7)}
      />
    </div>
  );
}

export default App;
