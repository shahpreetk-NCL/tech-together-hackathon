import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Details = React.lazy(() => import('./pages/Details'));

// define routes
const routes = [
  { path: '/', exact: true, name: 'Home', element: <Home /> },
  { path: '/details', exact: true, name: 'Details', element: <Details /> },
];

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, exact, name, element }) => (
            <Route key={name} path={path} exact={exact} element={element} />
          ))}
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
