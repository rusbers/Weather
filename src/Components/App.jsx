import React from "react"
import { WeatherPage } from "../Pages/WeatherPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout"
import { HelpPage } from '../Pages/HelpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WeatherPage />} />
          <Route path='help-page' element={<HelpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
