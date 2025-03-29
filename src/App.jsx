import { Route, Routes } from "react-router-dom";
import { ActiveProvider } from './components/ActivePageContext';
import Login from "./components/Login";
import Page from "./components/Page";
import Signup from "./components/Signup";
function App() {
  // const { currenUser } = useAuth();
  const currentUser  = true;

  return (
      <>
              <ActiveProvider>
        {currentUser ? (
          <Routes>
            <Route path="/Page" element={<Page />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        )}
        </ActiveProvider>
      </>
  );
}

export default App;
