import './App.css';
import Greeting from './Components/child1';

const name = 'Mahi'
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/50/60"
const img2 = "https://picsum.photos/50/60"
const link = "https://www.youtube.com/"

function App() {
  return (
    <>
      <div className="App">
        <h1>Top 5 Series</h1>
        <p>here is the addition {2 + 4}</p>
        <p contentEditable="true">My name is {name}</p>
        <p>Current Date is {date}</p>
        <p>Current Time is {time}</p>
        <img src={img1} alt="" />
        <a href="link" target="_blank">
          <img src={img2} alt="" />
        </a>
      </div>

      <Greeting />
    </>

  );
}

export default App;
