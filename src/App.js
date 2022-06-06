import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import './Home.css';
import { Homepage } from './Homepage';
import { Service } from './Service';
import { About } from './About';
import { Contact } from './Contact';
import { Shipping } from './Shipping';
import { Calculation } from './Calculation';
import { Road } from './Road';

function App() {
  return (
    <div className="App">
        <Routes>
          
            <Route path = "/" element = {<Homepage/>}/>
            <Route path = "/Home" element = {<Home/>}/>
            <Route path = "/Service" element= {<Service/>}/>
            <Route path = "/About" element= {<About/>}/>
            <Route path = "/Contact" element= {<Contact/>}/>
            <Route path = "/Shipping" element= {<Shipping/>}/>
            <Route path = "/Road" elements={<Road/>}/>
      
        </Routes>
      
</div>
  );
}

export default App;
