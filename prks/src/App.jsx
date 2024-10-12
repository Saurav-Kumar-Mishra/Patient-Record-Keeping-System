import { createBrowserRouter } from 'react-router-dom'
import Home from './assets/Components/Pages/Home'
import About from './assets/Components/Pages/About'
import Dashboard from './assets/Components/Pages/Dashboard'
import { RouterProvider } from 'react-router-dom'
import NavBar from './assets/Components/Pages/NavBar'
import ErrorPage from './assets/Components/Pages/ErrorPage'
import Footer from './assets/Components/Pages/Footer'
import LoginPage from './assets/Components/Pages/Login'
import RegistrationForm from './assets/Components/Pages/Register'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div>
                    <NavBar />
                    <Home />
                    <Footer />
                </div>
            ),
        },
        {
            path: 'about',
            element: (
                <div>
                    <NavBar />
                    <About />
                    <Footer />
                </div>
            ),
        },
        {
            path: 'dashboard',
            element: (
                <div>
                    <NavBar />
                    <Dashboard />
                    <Footer />
                </div>
            ),
        },
        {
            path: 'login',
            element: (
                <div>
                    <NavBar />
                    <LoginPage/>
                    <Footer />
                </div>
            ),
        },
        {
            path: 'register',
            element: (
                <div>
                    <NavBar />
                    <RegistrationForm/>
                    <Footer />
                </div>
            ),
        },
        {
            path: '*',
            element: (
                <div>
                    <NavBar />
                    <ErrorPage />
                    <Footer />
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
