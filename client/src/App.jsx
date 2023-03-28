import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import ListContacts from './components/ListContacts';
import PortalExample from './components/PortalExample';



function App() {

  return (
    <div className="App">
      <MyNavBar />
      <ListContacts />
      <div className="clipping-container">
        <PortalExample />
      </div>
    </div>
  )
}

export default App
