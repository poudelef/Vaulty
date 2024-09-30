import './App.css';
import profile from'./assets/profile.jpg'

import playButton from './functions';


function App() {
  return (
    <div className='App'>
      
        <h1>Vaulty</h1>
    
      <div className='content'>
        <aside className='sidebar'>
        <div class = 'main-content'>
        <div class = 'one'> <playButton/></div>
        <div class = 'one'><button class ='main-content-button'>Next Rotation</button></div>
        <div class = 'one'><button class ='main-content-button'>Intrest buttonaid</button></div>
        <div class = 'one'><button class ='main-content-button'>Total Money Received</button></div>
        <div class = 'one'><button class ='main-content-button'>Will add someting</button></div>
        </div>
        </aside>
        <main className='info'>
        <div><img src={profile} alt='Profile' className='profile_img' /></div>
          <p>Name: Sambhav Poudel</p>
          <p>Contaact: 5132702070</p>
          <p>Address: 3033 Cliftion Avenue</p>
          <p>BanK Information: Chase 3453</p>
          <p>Will add more feature</p>
        </main>
      </div>
    </div>
  );
}

export default App;
