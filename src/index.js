import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
