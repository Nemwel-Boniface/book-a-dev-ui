import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import '@testing-library/jest-dom';
// import Developers from '../pages/developers';
import Reservations from '../pages/reservations';
import Developer from '../pages/developer';
import Login from '../pages/login';
import Signup from '../pages/signup';
import CreateDev from '../pages/create_dev';
import FormReservation from '../pages/reserveForm';

describe('Test developers page', () => {
  it('should display the reservation list', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="reservations" element={<Reservations />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should be able to see the developer details pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="developers/:developerId" element={<Developer />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should be able to see the login pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should be able to see the login pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="registration" element={<Signup />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should be able to see the login pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="create_dev" element={<CreateDev />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should be able to see the login pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="create_reservation" element={<FormReservation />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
