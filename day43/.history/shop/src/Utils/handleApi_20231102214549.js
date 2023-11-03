import { client } from './client.js'
export async function handleGetProducts(query) {
     const url = new URLSearchParams(query);
     console.log(url);
     const { data } = await client.get(`/products`);
     console.log(data.data);

}