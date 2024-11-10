import { useEffect, useState } from "react";
import "./App.css";
import A from "./component/A";
import B from "./component/B";

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div style={{ padding: "1rem" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div style={{ display: "flex" }}>
        <A posts={posts} message={value} />
        <B posts={posts} message={value} />
      </div>
    </div>
  );
}

export default App;
