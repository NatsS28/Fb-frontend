
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <div>
          <div className='head'>
              {/* <h1>Fb</h1> */}
          </div>
          <Header />
          
          <main className='flex bg-gray-100'>
              <Sidebar />
          </main>
      </div>
  );
}

export default App;
