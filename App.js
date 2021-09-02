
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginComponent from './component/login';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginComponent} exact/>
        </Switch>
      </BrowserRouter>
    </div>

    </Provider>
    
  );
}

export default App;
