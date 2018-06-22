import * as React from "react";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile name="이승규" job="풀스택" />
        <Counter />
        <TodoList />
      </div>
    );
  }
}

export default App;
