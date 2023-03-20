import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar } from 'components/Navbar/Navbar';
import { Home } from 'components/Home/Home';

export const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Home />
    </div>
  );
};
