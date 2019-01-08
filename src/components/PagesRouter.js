import React from 'react';
import { Route } from 'react-router-dom';
import ByBreed from './ByBreed';
import RandomImage from './RandomImage'

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        {/*<Route path="/" exact component={Home} />*/}
        <Route path="/bybreed" component={ByBreed} />
        <Route path="/randomimage" component={RandomImage} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    