import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
    <>
      <Greeting name="Adv Cloud Class" favoriteNumber={12} favoriteColors = {[ "Red", "Lime Green", "Orange"]} />
      <Greeting name="Juan" favoriteNumber={76}/>
      <Greeting name="Savannah" favoriteNumber={16}/>
      <Greeting name="Chris"favoriteNumber={27}/>
      <Greeting name="Persephony" favoriteNumber={50}/>
    </>
  );
}

export default App;
