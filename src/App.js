import logo from './img/logoLE2.png';
import table from './img/table.png';
import person from './img/person.png';
import AppStore from './img/AppStore.png';
import GooglePlay from './img/GooglePlay.png';
import './App.css';



function App() {
  
  return (
    <div className="App">
      <script>
      function Login(){
    <a href="/loginPage.js" target="_blank" rel="noopener noreferrer"></a> 
    }
      </script>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className="loginButtons">
        <button class="login" onclick="window.open('/loginPage.js','_blank'">Zaloguj się</button>
        <br></br>
        <button class="signup" onclick="window.open('/loginPage.js','_blank'">Zarejestruj się</button>
      </div>
      <div className="Download">
        <img src={AppStore} className="AppStore" alt="AppStore" />
        <img src={GooglePlay} className="GooglePlay" alt="GooglePlay" />
      </div>
      </header>

      <div className="MainText">
        Z nami <br></br>znajdziesz<br></br>wolny stolik
      </div>

      <img src={table} className="table" alt="table" />
      <img src={person} className="person" alt="person" />

      <div className="line"></div>

      <div className="SecondText">
        Chcesz znaleźć wolne miejsce w<br></br>pobliskiej restauracji? Z nami jest<br></br>to banalnie proste!<br></br>
      </div>

      <div className="ThirdText">
      Zacznij już teraz.
      </div>

    </div>
  );
}



export default App;
