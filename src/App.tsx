import React, { useEffect } from "react";
import "./App.css";

function App() {
  const img = ["imgurl1", "imgurl2", "imgurl3"];
  const obj = {
    name: "cc",
    img: [
      {
        url: "imgurl1",
      },
      {
        url: "imgurl2",
      },
    ],
  };

  useEffect(() => {
    console.log(obj);
  }, []);

  return (
    <div className="App">
      {obj.img.map((item) => {
        return <div>{item.url}</div>;
      })}
      {img.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}

export default App;
