import React from 'react';
import Body from '../Body/Body';
import Sidebar from '../Sidebar/Sidebar';
import { HomeContainer, BodyContainer } from './styles';
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from '../../Config Routes/Routing';

const HomeComponent = () => {
  return (
    <HomeContainer>
        <BodyContainer>
          <Router>
            <Sidebar />
            <Routing />
          </Router>
        </BodyContainer>
    </HomeContainer>
  )
  // <Body />
}

export default HomeComponent