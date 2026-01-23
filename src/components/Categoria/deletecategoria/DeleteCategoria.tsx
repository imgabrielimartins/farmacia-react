import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../model/Categoria";
import { deletar, listar } from "../../../services/Service";

function DeleteCategoria() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  useEffect(() => {
    if (id) {
      listar(`/categorias/${id}`, setCategoria);
    }
  }, [id]);

  async function remover() {
    await deletar(`/categorias/${id}`);
    alert("Categoria deletada!");
    navigate("/categorias");
  }

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl my-6">Deletar Categoria</h1>

      <p>Tem certeza que deseja deletar:</p>
      <strong>{categoria.titulo}</strong>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={remover}
          className="bg-red-600 text-white px-4 py-2"
        >
          Sim
        </button>

        <button
          onClick={() => navigate('/categorias')}
          className="bg-gray-600 text-white px-4 py-2"
        >
          Não
        </button>
      </div>
    </div>
  );
}

export default DeleteCategoria;
