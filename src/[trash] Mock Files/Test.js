import React, {useEffect} from 'react';
import { TestApi } from 'api';

const Test = () => {

  useEffect(()=> {
    TestApi('IThg6tldMpmYWvZa0zbB').then(result => console.log(result.data()))
  },[])

  return (
    <div>Test</div>
  )
}

export default Test