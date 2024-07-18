import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import { RootProvider } from "./provider/RootProvider";

function App() {
  return (
    <>
      <RootProvider>
        <Dashboard />
      </RootProvider>
    </>
  );
}

export default App;
