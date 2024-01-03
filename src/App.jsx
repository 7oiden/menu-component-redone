import "./App.css";
import Box from "./components/Box/Box";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  return (
    <div className="wrapper">
      <Box />
      <Star onChange={() => console.log("Star toggled")} />
      <Menu onOpen={() => console.log("Menu toggled")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default App;
