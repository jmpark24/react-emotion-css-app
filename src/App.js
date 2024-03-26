import { Outlet, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import SearchPage from './pages/SearchPage';
import BookDetailPage from './pages/BookDetailPage';

const Layout = () => {
  return (
    <div>
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
