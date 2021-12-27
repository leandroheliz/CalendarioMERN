import './index.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";

function App() {
  return ( 
    <BrowserRouter >
    <AppRouter />
    </BrowserRouter>
  );
}

export default App;