import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'This is react web component';
  const likes = 34;
  const link = "https://www.netguru.com/glossary/react-native";
  const data = "https://github.com/iamshaunjp/Complete-React-Tutorial/tree/lesson-30/dojo-blog";
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
        
        <h1>Hello {title} </h1>
        <p>reviews and likes around {likes} views</p>
        <p>{ [1,2,3,4] }</p>
        <p>{ Math.random() *8}</p>
        <a href={link}>React tutorial</a>
        <a href={data} style={{
          color:"chocolate",
          backgroundColor: 'antiquewhite',
          borderRadius:"7px"
        }}>dojo Blog ReactJs</a>
      </div>
    </div>
  );
}

export default App;
