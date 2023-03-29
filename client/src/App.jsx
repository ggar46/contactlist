import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import ListContacts from './components/ListContacts';
import Modal from './components/Modal.jsx';




function App() {

  return (
    <div className="App">
      <MyNavBar />
      <ListContacts />
      <Modal />
    </div>
  )
}

export default App
