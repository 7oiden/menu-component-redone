import "./App.css";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  return (
    <>
      {/* <Toggle
        onToggle={() => {
          console.log("Toggled");
        }}
      >
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>;
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle> */}

      {/* <Star onChange={() => {}} /> */}

      <Menu onOpen={() => console.log("Menu toggled")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
