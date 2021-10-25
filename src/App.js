import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  const styles = {
    container: {
      padding: 20,
      backgroundColor: new Date().getSeconds() % 2 == 0 ? "orange" : "purple"
    }
  }
  return (
    <div style={styles.container}>
      <Greeting name="Adv Cloud Class" favoriteNumber={12} favoriteColors = {[ "Red", "Lime Green", "Orange"]} />
      <Greeting name="Juan" favoriteNumber={76}/>
      <Greeting name="Savannah" favoriteNumber={16}/>
      <Greeting name="Chris"favoriteNumber={27}/>
      <Greeting name="Persephony" favoriteNumber={50}/>
    </div>
  );
}

export default App;
