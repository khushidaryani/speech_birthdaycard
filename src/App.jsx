import 'regenerator-runtime/runtime';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Card from './pages/Card';
import Help from './pages/Help';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'card',
                element: <Card />,
            },
            {
                path: 'help',
                element: <Help />,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;