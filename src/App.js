import Profile_img from './assets/profile.jpg';
import './App.css';


function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function Profile(){
  return(
    <img
    src={Profile_img}
    alt="Profile Picture"
    className='profile_img '
    />
  );
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Vaulty {person.name}</h1>
      <MyButton />
      <Profile/>
    </div>
  );
}

export default App;
