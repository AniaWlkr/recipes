import { Routes, Route } from 'react-router';
import AppBar from '../componenets/AppBar';
import Container from '../componenets/Container';
import routes from '../componenets/routes';
import HomePage from '../Pages/HomePage';
import FavouritesPage from '../Pages/FavouritesPage';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route exact path={routes.home} element={<HomePage />} />
        <Route path={routes.favourites} element={<FavouritesPage />} />
      </Routes>
    </Container>
  );
}

export default App;
