import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Body from '../Components/Body/Body';
import Libary from '../Pages/Library Page/Libary';
import SearchResults from '../Pages/Search Results/SearchResults';

const Routing = () => {
  return (
    <Routes>
      <Route 
        path='/results'
        element={<SearchResults />}
        />
      <Route
        path='/library'
        element={<Libary />}
      />
      <Route
        path='/'
        exact
        element={<Body />}
      />
    </Routes>
  )
}

export default Routing