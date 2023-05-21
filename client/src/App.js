import './App.css';
import CompanyTable from './components/CompanyTable'
import CompanyAdder from './components/CompanyAdder'

function App() {
  return (
    <div className="App">
      <CompanyAdder/>
      <CompanyTable/>
    </div>
  );
}

export default App;
