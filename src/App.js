import { useCallback } from 'react';
import Particles from 'react-particles';
import {loadFull} from 'tsparticles';
import ParticlesOptions  from './data/particles.json'; // you can change ./data/... to anything you want, go to https://particles.js.org/ for more
import './styles/App.css';

function App() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
  );
  return (
  <>
  <h1 style = {{color: "#0000ff"}}>Fireworks Happy 4th of July!</h1>
  <Particles
  options={ParticlesOptions}
  init={particlesInit} />
  </>
  );
}

export default App;
