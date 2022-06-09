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
import { Air } from './Air';
import { Ship } from './Ship';
import { NewShipment } from './NewShipment';
import { History } from './History';
import { Review } from './Review';
import { CheckStatus } from './CheckStatus';
import { StatusCheck } from './StatusCheck';

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
            <Route path = "/Road" element={<Road/>}/>
            <Route path = "/Air" element={<Air/>}/>
            <Route path = "/Ship" element={<Ship/>}/>
            <Route path = "/NewShipment" element={<NewShipment/>}/>
            <Route path = "/History" element={<History/>}/>
            <Route path = "/Review" element={<Review/>}/>
            <Route path = "/CheckStatus" element={<CheckStatus/>}/>
            <Route path = "/StatusCheck" element={<StatusCheck/>}/>

      
        </Routes>
      
</div>
  );
}

export default App;
