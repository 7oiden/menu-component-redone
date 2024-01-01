import "./App.css";
import Menu from "./components/Menu/index";
import Toggle from "./components/Toggle/index";

function App() {
  return (
    <Toggle>
      <Menu>
        <Toggle.Button>
          <Menu.Button>Menu</Menu.Button>
        </Toggle.Button>
        <Toggle.On>
          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
          </Menu.Dropdown>
        </Toggle.On>
      </Menu>
    </Toggle>
  );
}

export default App;
