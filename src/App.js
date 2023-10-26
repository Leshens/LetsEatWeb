import logo from './img/logoLE2.png';
import table from './img/table.png';
import person from './img/person.png';
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
      </header>
      <div className="loginButtons">
        <button class="login" onclick="window.open('/loginPage.js','_blank'">Zaloguj się</button>
        <br></br>
        <button class="signup" onclick="window.open('/loginPage.js','_blank'">Zarejestruj się</button>
      </div>

      <div className="MainText">
      Z nami <br></br>znajdziesz<br></br>wolny stolik
      <img src={table} className="table" alt="table" />
      <img src={person} className="person" alt="person" />
      </div>

    </div>
  );
}



export default App;
