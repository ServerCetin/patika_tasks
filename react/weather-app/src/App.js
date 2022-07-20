import './App.css';
import SelectCity from "./components/selectCity/index";
import Forecast from "./components/forecast";
import {UserMetaProvider} from "./context/UserMetaContext";

function App() {
  return (
      <UserMetaProvider>
          <div className="p-8 inline-block">
              <SelectCity />
              <Forecast />
          </div>
      </UserMetaProvider>
  );
}

export default App;
