import './App.css';
import Navbar from './Navbar';
import Table from './Table';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className='bg-primary'>
        <div className='bg-dark bg-opacity-75'>
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;
