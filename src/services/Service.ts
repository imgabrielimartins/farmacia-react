import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const listar = async (url: string, setDados: Function, header: object) => {
  try {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao listar:", error);
  }
};

export const cadastrar = async (url: string, dados: object, setDados: Function, header: object) => {
  try {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
  }
};

export const atualizar = async (url: string, dados: object, setDados: Function, header: object) => {
  try {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao atualizar:", error);
  }
};

export const deletar = async (url: string, header: object) => {
  try {
    await api.delete(url, header);
  } catch (error) {
    console.error("Erro ao deletar:", error);
  }
};

export default api;