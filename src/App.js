import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import Menu from "./components/Menu/Menu";
import classes from "./App.module.css";

function App(props) {
  return (
    <div className={classes.app}>
      <Navigation />
      <Header />
      <Menu />
    </div>
  );
}

export default App;
