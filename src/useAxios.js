import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "https://react-mini-projects-api.classbon.com/";

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.request(axiosParams);
    setLoading(false);
    setFastFoodItems(response.data);
  };

  return { response, error, loading };
};
