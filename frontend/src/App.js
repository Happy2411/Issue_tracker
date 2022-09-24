
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./component/Login";
import Signup from "./component/Signup";
import Header from "./component/Header";
import IssueForm from "./component/IssueForm";
import Track from "./component/Track";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/issueform" element={<IssueForm/>}/>
        <Route path="/track" element={<Track/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App