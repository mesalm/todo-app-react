import "./Footer.css";
export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="ToDoTotal">Total Todos:{props.todos.length}</div>
      <div className="CompletedToDo">
        Completed Todos: {props.todos.filter((item) => item.completed).length}
      </div>
      <div className="Author">
        <a className="link" href="https://github.com/mesalm">
          Github
        </a>
      </div>
    </footer>
  );
}
