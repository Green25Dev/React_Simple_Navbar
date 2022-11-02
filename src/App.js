import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout />
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          style={{ fontSize: 14, fontWeight: 'bold' }}
          limit={1}
      />
    </div>
  );
}

export default App;
