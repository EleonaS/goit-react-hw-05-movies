import { lazy, Suspense } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
//import { ToastContainer } from 'react-toastify';
import { Container } from 'Components/Container/Container';
import { Header } from 'Components/Header/Header';
import { Loader } from 'Components/Loader/Loader';
import './App.css';

///Добавь асинхронную загрузку JS-кода для маршрутов приложения используя React.lazy() и Suspense.

/*const MyComponent = lazy (() => import ('./ MyComponent'))*/

const Home = lazy(() =>
  import(
    './views/Home/Home' /* webpackChunkName: " home" */
  ),
);

const MoviesPage = lazy(() =>
  import(
    'views/MoviesPage/MoviesPage'
    /* webpackChunkName: "movies" */
  ),
);
const MovieDetails = lazy(() =>
  import(
    'views/MovieDetails/MovieDetailsPage' /* webpackChunkName: "moviePage" */
  ),
);

const NotFoundMovie = lazy(
  () =>
    import(
      'views/NotFound/NotFound'
    ) /* webpackChunkName: "notFound" */,
);

function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/*"
              element={<Home />}
            />
            <Route
              path="/movies"
              element={<MoviesPage />}
            />
            <Route
              path="/movies/:movieId/*"
              element={<MovieDetails />}
            />
            <Route
              path="*"
              element={
                <NotFoundMovie />
              }
            />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
export default App;

/////
//   уточнить по <Redirect
