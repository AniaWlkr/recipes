import { Routes, Route } from 'react-router';
import AppBar from '../AppBar';
import Container from '../Container';
import routes from '../routes';
import HomePage from '../../Pages/HomePage';
import FavouritesPage from '../../Pages/FavouritesPage';

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
