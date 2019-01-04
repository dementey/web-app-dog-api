import React, { Fragment } from 'react'
import lifecycle from 'react-pure-lifecycle';


const methods = {
    componentDidMount() {
      console.log('I mounted! ListAllBreeds ');
    }
  };


const ListAllBreeds = () => (

    <Fragment>
        ListAllBreeds
    </Fragment>

)

export default lifecycle(methods)(ListAllBreeds)
