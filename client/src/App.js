import logo from './programmer.png';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {

  const handleOnUpdateEvent = (message) => {
    console.log(message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <UserProfile
          title="Display user profile"
          name="Ruwanthi Lakshika"
          address={{
            street: "123 React St",
            city: "Reactville"
          }}
          onUpdateClicked={handleOnUpdateEvent}
        />
        
      </header>
    </div>
  );
}

export default App;
