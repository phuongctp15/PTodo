import { Col, Row, Input, Button, Select, Tag, Empty } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selectors";
import { addTodoAction } from "../../redux/actions/todo";
export default function TodoList() {
  const dispatch = useDispatch();
  const [name, setName] = useState(" ");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePriority = (value) => {
    setPriority(value);
  };

  const handleAddTodo = () => {
    dispatch(
      addTodoAction({
        id: uuidv4(),
        name,
        priority,
        completed: false,
      })
    );

    setName(" ");
    setPriority("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ maxHeight: "130px", overflowY: "auto" }}>
        {todoList.length ? (
          todoList?.map((todo) => (
            <Todo
              key={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              completed={todo.completed}
              id={todo.id}
            />
          ))
        ) : (
          <Empty description="You don't have any to-do yet..." />
        )}
      </Col>
      <Col span={24} style={{ paddingTop: "30px" }}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={name}
            onChange={handleChangeName}
            placeholder="Add your to-do"
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
        <p className="desc-app">
          The app remembers your to-dos by{" "}
          <a href="https://www.instagram.com/empty.ctp/" className="author">
            phuong.
          </a>{" "}
          from Bkav Cyber Security
        </p>
      </Col>
    </Row>
  );
}
