import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
//import BySubBreed from './BySubBreed';
import RandomImage from './RandomImage'

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Home} />
        {/*<Route path="/bysubbreed" component={BySubBreed} />*/}
        <Route path="/randomimage" component={RandomImage} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    