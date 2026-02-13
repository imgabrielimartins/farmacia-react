import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const listar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: object) => {
  return await api.post(url, dados);
};

export const atualizar = async (url: string, dados: object) => {
  return await api.put(url, dados);
};

export const deletar = async (url: string) => {
  return await api.delete(url);
};

export default api;
