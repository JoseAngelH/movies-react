
const API = "https://my-json-server.typicode.com/JoseAngelH/api_movies/";

export async function get(path) {
    try{
        const response = await fetch(API + path)
        const result = await response.json();
        if (response.status !== 200) throw  result;
        return result;
    }catch(error) {
        throw error;
    }
}