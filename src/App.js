import React, {useEffect} from 'react';
import './common/css/init.css'
import Animation from 'animejs'
import Expression from './common/component/Expression'

function App() {
  useEffect(() => {
    new Animation({
      targets: ['.blue', '.green'],
      translateX: '13rem',
      rotate: 180,
      borderRadius: 8,
      duration: 2000
    })
  })
  return (
    <React.Fragment>
      <Expression/>
    </React.Fragment>
  );
}

export default App;

