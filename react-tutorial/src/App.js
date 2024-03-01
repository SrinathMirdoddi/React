import Navbar from './Navbar';
import Listed from './Listed';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'; 
import Create from './Create'; 
import Blogdetails from './Blogdetails';
import Notfound from './Notfound';

function App() {
const title = "Welcome to the react functionality";
const likes = 50;
const site = "https://www.bing.com/chat?form=NTPCHT";
  return (
  
    <Router>
    <div className ="App">
      <Navbar />    
      
      <div className ="Content">
        <Switch>
        <Route exact path = "/c">
        <Home/>
        </Route>
        <Route path = "/data/{}">
          <Listed />
        </Route>
        <Route path ="/create">
          <Create/>
        </Route>
        <Route path ="/blogs/:id">
         <Blogdetails />
        </Route>
        <Route path = "*">
          <Notfound />
        </Route>
        </Switch>

        <h2>{ title }</h2>
        <p>tutorial liked by {likes} people</p>
        <p>{ 10 }</p>
        <p>{ "hello, react" }</p>
        <p>{ [1,2,3,4] }</p>
        <p>{ Math.random() * 9}</p>
        <a href={site}>It is AI bootcamp</a>
      </div>
    </div>
    </Router>
  );
}

export default App;
