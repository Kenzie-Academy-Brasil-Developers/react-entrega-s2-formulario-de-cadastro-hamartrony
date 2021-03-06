import './App.css';
import Routes from './components/Routes/Rotas';
import Exemplo from './components/Styled';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
      <ToastContainer />
        <Routes/>



   
       
      </header>
    </div>
  );
}

export default App;
