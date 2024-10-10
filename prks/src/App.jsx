import { createBrowserRouter, Router } from 'react-router-dom'
import Home from './assets/Components/Pages/Home'
import About from './assets/Components/Pages/About'
import Dashboard from './assets/Components/Pages/Dashboard'
import { RouterProvider } from 'react-router-dom'
import NavBar from './assets/Components/Pages/NavBar'
import ErrorPage from './assets/Components/Pages/ErrorPage'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div>
                    <NavBar />
                    <Home />
                </div>
            ),
        },
        {
            path: 'about',
            element: (
                <div>
                    <NavBar />
                    <About />
                </div>
            ),
        },
        {
            path: 'dashboard',
            element: (
                <div>
                    <NavBar />
                    <Dashboard />
                </div>
            ),
        },
        {
            path: '*',
            element: (
                <div>
                    <NavBar />
                    <ErrorPage />
                </div>
            ),
        },
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
