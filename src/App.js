import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/cake/Store';
import Cakecontainer from './components/Cakecontainer';
import Hookscontainer from './components/Hookscontainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Cakecontainer/>
    <Hookscontainer/>
    </div>
    </Provider>
  );
}

export default App;
