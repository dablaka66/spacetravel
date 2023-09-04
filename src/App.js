import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto/Motto";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import Spacecrafts from "./pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "./pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "./pages/Spacecraft/Spacecraft";
import Planets from "./pages/Planets/Planets";

export default function App() {
  //const { isLoading } = useContext(LoadingContext);
  const isLoading = false;

  if (!isLoading) {
    return (
      // todo wrap with BrowserRouter and render the necessary components
      <div className={styles["app"]}>
        <Router>
          <header className={styles["app__header"]}>
            <NavigationBar />
          </header>

          <main className={styles["app__main"]}>
            <AppRoute />
          </main>

          <footer className={styles["app__footer"]}>
            <Motto />
          </footer>
        </Router>
      </div>
    );
  } else {
    // todo render Loading based on its condition
    return <Loading />;
  }
}
