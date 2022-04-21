import './App.css';
import HomeView from './views/homeview';
import { messageArr } from './msgarray';

function App() {
  return (
    <div className="App">
      <h1> Hello bugs! </h1>
      <HomeView message={messageArr[1]}/>
    </div>
  );
}

export default App;
