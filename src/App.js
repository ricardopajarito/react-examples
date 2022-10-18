import './App.css';
import Formulario from './components/Formulario';
import Pokemons from './components/Pokemons';
import { QueryClient, QueryClientProvider } from 'react-query';
import BestPractices from './components/BestPractices';
import MemoizedValue from './components/Memoized';
import MemoizedFunction from './components/Callback';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Formulario />
        <Pokemons />
        <BestPractices />
        <MemoizedValue />
        <MemoizedFunction />
      </div>
    </QueryClientProvider>
  );
}

export default App;
