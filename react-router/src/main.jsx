import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './Contact'
import User from './components/User'
import Github, { githubInfoLoader } from './components/Github'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     }, {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='user/:userId' element={<User />}></Route>
      <Route loader={githubInfoLoader}>
        path='github'
        element={<Github />}
      </Route>


    </Route >

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
