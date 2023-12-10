import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchPage } from "../components";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  )
}
