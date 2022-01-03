import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import SideBare from './components/SideBare';
import Add from './pages/Add';
import EditCand from './pages/EditCand';
import ShowCand from './pages/ShowCand';

function App() {
  return (
    <div className="App">
            <Navbar/>
            
            <Router>
            <SideBare/>
                    <Switch>

                        <Route exact path="/" component={Items}/>

                        
                        <Route exact path="/add" component={Add}/>
                        <Route exact path="/edit/:id" component={EditCand}/>
                        <Route exact path="/show/:id" component={ShowCand}/>
                            
                   
                    </Switch>
                        
                
                </Router>
         
    </div>
    
  );
}

export default App;
