/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";

// eslint-disable-next-line react/prop-types, no-unused-vars
const CategoryList = ({ children, filterItem }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <ul className="nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            همه فست فودها
          </a>
        </li>
        {categories.map((category) => {
          return (
            <li className="nav-item" key={categories.id} onClick={() => filterItem(category.id)}>
              <a href="#" className="nav-link">
                {category.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="container mt-n5">
      <div className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4" style={{ height: "80px" }}>
        {renderContent()}
        {children}
      </div>
    </nav>
  );
};
export default CategoryList;
