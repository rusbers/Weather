import React from "react"
import { WeatherPage } from "./WeatherPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout"
import { HelpPage } from './HelpPage';

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
