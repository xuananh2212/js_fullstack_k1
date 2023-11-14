import { useState } from 'react'
import routes from './Routers/router.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {
            routes.map(({ path, Component }, index) => {
              return (
                <Route key={index}
                  path={path}
                  element={<Component />}
                  index={path === '/product' ? true : false}
                ></Route>
              )
            })
          }
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App
