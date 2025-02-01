import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Applayout from "./Applayout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/viaggi/:id/detail" element={<DetailPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
