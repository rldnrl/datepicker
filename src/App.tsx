import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DatePicker from "./components/Datepicker";
import Calendar from "./components/Calendar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DatePicker />
      <Calendar />
    </div>
  );
}

export default App;
