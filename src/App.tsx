import React from "react";
import { Header } from "./components/common/header/Header";
import { Input } from "./components/common/input/Input";

function App() {
  return (
    <div className="bg-gray-600 text-center">
      <Header />
      <Input label={"Array size"}/>
    </div>
  );
}

export default App;
