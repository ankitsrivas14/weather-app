import { StoreProvider } from "../../store";
import WeatherScreen from "../WeatherScreen";

const App = () => (
  <StoreProvider>
    <WeatherScreen />
  </StoreProvider>
);

export default App;
