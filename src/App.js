import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import ListUserspage from './components/ListUserspage';
import { Nav, Navbar, Container } from 'react-bootstrap';
import ViewUserpage from './components/ViewUserpage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1> Sample projet</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery"> gallery</Link>

          </nav>
        </header>
        <Routes>
          <Route index element={<ListUserspage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='gallery' element={<GalleryPage />} />

          <Route path='users/:userid' element={<ViewUserpage />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}


function Homepage() {

  return (<div className='contents'>

    <h2> home page </h2>
    <p>home page contents will available here</p>


  </div>);


}

function Aboutpage() {

  return (<div className='contents'>

    <h2> About page </h2>
    <p>about page contents will available here</p>

  </div>);


}

function GalleryPage() {

  return (<div className='contents'>

    <h2> GalleryPage</h2>
    <p>about page contents will available here</p>

  </div>);


}

function ErrorPage() {

  return (<div className='contents'>

    <h2> 404</h2>
    <p>No data found</p>

  </div>);


}
export default App;
