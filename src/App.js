import './App.css';
import Formulario from './components/Formulario';
import Pokemons from './components/Pokemons';
import { QueryClient, QueryClientProvider } from 'react-query';
import BestPractices from './components/BestPractices';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Formulario />
        <Pokemons />
        <BestPractices />
      </div>
    </QueryClientProvider>
  );
}

export default App;
