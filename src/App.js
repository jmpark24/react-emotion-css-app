import { Outlet, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import SearchPage from './pages/SearchPage';
import BookDetailPage from './pages/BookDetailPage';
import { Global, css } from '@emotion/react';

const Layout = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: white;
            color: block;
            transition-duration 0.2s;
            transition-property: background-color, color;
          }
          a {
            color: black;
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
      `}
      />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="/book/:bookId" element={<BookDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
