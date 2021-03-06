import {BrowserRouter,Route,Switch} from 'react-router-dom';

import ActualizarAutor from './components/ActualizarAutor';
import Autor from './components/Autor';
import Error from './components/Error';
import NuevoAutor from './components/NuevoAutor';
import TodosAutores from './components/TodosAutores';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <TodosAutores />} /> 
          <Route path="/nuevo" render={() => <NuevoAutor />} />
          <Route path="/autor/editar/:id" render={() => <ActualizarAutor />} />
          <Route path="/error" render={() => <Error />} />
          <Route path="/autor/:id" exact render={(routeProps) => <Autor {...routeProps}/>} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
