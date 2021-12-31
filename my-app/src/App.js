import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputExam from './Components/InputExam';
import UseStateExam from './Components/UseStateExam';

function App() {
    return (
        <Router>
            <div>
                
            <Routes>
                <Route exact path="/" element={< UseStateExam />} />      
                <Route path="/InputExm" element={< InputExam />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
