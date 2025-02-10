import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import builderConfig from './config/builder.json';
import PageRenderer from './PageRenderer';


function App() {
  const pageConfig = builderConfig

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageRenderer layout={pageConfig.home} />} />
          <Route path="/quem-somos" element={<PageRenderer layout={pageConfig.quemSomos} />} />
          <Route path="/contato" element={<PageRenderer layout={pageConfig.contato} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App