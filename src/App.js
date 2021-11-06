import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Header, Divider, Container } from "semantic-ui-react";
import Home from "./Home";
import Rules from "./Rules";

function App() {
  return (
    <Container className="App" style={{ height: "100vh", width: "100%" }}>
      <Header
        as="h1"
        style={{ marginBottom: "5%", paddingTop: "5%", color: "#FED053" }}
      >
        Rock, Paper, Scissors
      </Header>
      <Divider />
      <Header as="h2" style={{ marginBottom: "5%", color: "#FED053" }}>
        Choose your "Weapon" below
      </Header>
      <Rules />
      <Home />
    </Container>
  );
}

export default App;
