import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import Home from './components/home';
import QuestionList from './components/Questionlist';
// import Createpost from './components/createpost';

function App() {
  return (
    <div className="container-fluid App">
      {/* <Header /> */}
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
