import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "93vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>
        <span className="name-app">
          PTodos{" "}
          <span className="listcheck-icon">
            <FontAwesomeIcon icon={faListCheck} />
          </span>
        </span>
      </Title>

      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
