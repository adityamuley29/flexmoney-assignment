import "./App.css";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/confirm-order" element={<ConfirmOrder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
