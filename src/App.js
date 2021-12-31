import { lazy, Suspense } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
//import { ToastContainer } from 'react-toastify';
import { Container } from 'Components/Container/Container';
import { Header } from 'Components/Header/Header';
import { Loader } from 'Components/Loader/Loader';
//import { NotFoundMovie } from 'views/NotFound/NotFound';
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

/*const NotFoundMovie = lazy(
  () =>
    import(
      'views/NotFound/NotFound'
    ) /* webpackChunkName: "notFoundMovie" */
/*,);*/

const Cast = lazy(
  () =>
    import(
      './views/Cast/Cast'
    ) /* webpackChunkName: "cast-page"*/,
);
const Reviews = lazy(
  () =>
    import('./views/Reviews/Reviews'),
  /* webpackChunkName: "reviews-page" */
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
              path="/movies/:movieId"
              element={<MovieDetails />}
            >
              <Route
                path="/movies/:movieId/cast"
                element={<Cast />}
              />
              <Route
                path="/movies/:movieId/reviews"
                element={<Reviews />}
              />
            </Route>
            <Route
              path="*"
              element={
                <main
                  style={{
                    padding: '1rem',
                  }}
                >
                  <p>
                    There's nothing
                    here!
                  </p>
                </main>
              }
            />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
export default App;
