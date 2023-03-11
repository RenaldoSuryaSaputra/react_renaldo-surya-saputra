import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FormCreateProduct from "./components/Form/CreateProduct";
import Heading from "./components/Introduction/Heading";
import ListProduct from "./components/TableOfProduct/ListProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Heading />
      <FormCreateProduct />
      <ListProduct />
    </div>
  );
}

export default App;
