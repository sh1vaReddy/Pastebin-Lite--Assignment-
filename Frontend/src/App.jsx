import CreatePaste from './components/CreatePaste';
import Pasteviewer from './components/Pasteviewer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreatePaste/>}/>
      <Route path='/p/:id' element={<Pasteviewer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App