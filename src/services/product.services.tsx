import axios from 'axios';
export async function getAllProducts() {
  try {
    const response = await axios.get(Get_All_Products);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
