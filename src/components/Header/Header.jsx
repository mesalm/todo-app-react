import "./Header.css";
import { FaCheckCircle } from "react-icons/fa";
export default function Header() {
  return (
    <header className="header">
      <div className="icon">
        <FaCheckCircle style={{ color: "green", fontSize: "30px" }} />
      </div>
      <div className="title">
        <h1>To-Do-List</h1>
      </div>
    </header>
  );
}
