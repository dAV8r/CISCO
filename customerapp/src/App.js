import './App.css'; // CSS-loader and style-loader
import CustomerList from './components/CustomerList';

function App() {
  return (
    <div className="App">
     <h1>Customer Application</h1>
     <CustomerList />
    </div>
  );
}

export default App;
