import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";

// lazy load pages
const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));

// define routes
const routes = [
  { path: '/', exact: true, name: 'Home', element: <Home /> },
];

function App() {
  return (
    <Router>
      <React.Suspense
        fallback={
          <div className="flex h-screen">
            <div className="m-auto">
              <h1 className="text-lg">Loading...</h1>
            </div>
          </div>
        }>
        <Layout>
          <Header />
          <Routes>
            {routes.map(({ path, exact, name, element }) => (
              <Route key={name} path={path} exact={exact} element={element} />
            ))}
          </Routes>
        </Layout>
      </React.Suspense>
    </Router>
  );
}

export default App;
