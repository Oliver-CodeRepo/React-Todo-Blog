import Landing from "./components/Landing";
import Blog from "./components/Blog/Blog.js";
import Todo from "./components/Todo/Todo.js";
import Header from './components/Header/Header.js'
import About from "./components/About/About.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Beverage from "./components/Beverage/Beverage";
import BeverageType from "./components/Beverage/BeverageType";
import BeverageTypeInfo from "./components/Beverage/BeverageTypeInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>    
        <Header />    
        <Switch>        
            <Route exact path='/'><Landing /></Route>

            <Route path='/todo'><Todo /></Route>

            <Route path='/blog'><Blog /></Route>

            <Route exact path='/beverage'><Beverage /></Route>
            <Route exact path='/beverage/:type'><BeverageType /></Route>
            <Route exact path='/beverage/:type/:id'><BeverageTypeInfo /></Route>

            <Route path='/about'><About /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
