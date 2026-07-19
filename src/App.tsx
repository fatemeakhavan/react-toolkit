import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductView from "./features/products/product-view";
import TodoView from "./features/todo/todo-view";

function App() {
  return (
    <Routes>
      <Route path="/product"  element={<ProductView />}/>
      <Route path="/todo" element={<TodoView/>}/>
    </Routes>
  );
}

export default App;
