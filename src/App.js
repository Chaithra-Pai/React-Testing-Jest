import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/hello';
import { FavoriteNumber } from './components/01/01';
import Toggle from './components/02/test-02';
import Custom from './03/test-03';
import Form from './04/test-04';
import SimpleAPIForm from './05/test-05';

function App() {
  return (
    <div className="App">
      {/* <Hello title="Hello world"/>
      <Toggle/>
      <Custom /> */}
      <Form />
      <SimpleAPIForm />
    </div>
  );
}

export default App;
