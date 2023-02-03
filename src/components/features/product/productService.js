import axios from "axios";
const API_URL = "/product";

const createProduct = async (data) => {
  const response = await axios.post(`${API_URL}/create `, data);
  return response.data;
};
const createTypeProduct = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}/createtypeproduct `, data);
  return response.data;
};
const updateTypeProduct = async (data) => {
    console.log(data);
  const response = await axios.post(`${API_URL}/updatetype`, data);

  return response.data;
};
const updateProduct = async (data) => {
  const response = await axios.post(`${API_URL}/update `, data);

  return response.data;
};
const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id} `);

  return response.data;
};
const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/item/${id} `);

  return response.data;
};
const getTypeProduct = async () => {
  const response = await axios.get(`${API_URL}/gettypeproduct `);

  return response.data;
};

const getAllProduct = async () => {
  const response = await axios.post(`${API_URL}/getallproduct `);

  return response.data;
};
const search_product = async (data) => {
  const response = await axios.get(`${API_URL}/search/${data} `);
  return response.data;
};
 
const getTypeProductById = async(id)=>{
    const response = await axios.get(`${API_URL}/gettypeproduct/${id} `);
    return response.data;
}
const authService = {
  createProduct,
  getTypeProductById,
  createTypeProduct,
  updateProduct,
  updateTypeProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  getTypeProduct,
  search_product,
};
export default authService;
