import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import { SearchBar } from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(`/FastFood/List${categoryId ? "?categoryId=" + categoryId : ""}`);
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const filterItem = (categoryId) => {
    fetchData(categoryId);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(`/FastFood/search${term ? "?term=" + term : ""}`);
    setLoading(false);
    console.log(response.data);
    setFastFoodItems(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center ">
            برای کلید واژه فوق هیچ ایتمی یافت نشد
            <img className="mx-auto mt-5  d-block" src={notFound} />
          </div>
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper  bg-faded-dark">
      <Header></Header>
      <CategoryList filterItem={filterItem}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
