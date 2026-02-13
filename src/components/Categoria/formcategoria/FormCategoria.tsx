import { ChangeEvent, useEffect, useState, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../../model/Categoria';
import { atualizar, cadastrar, listar } from '../../../services/Service';

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    titulo: '',
    descricao: '',
    setor: '',
  });

  useEffect(() => {
    if (id) {
      listar(`/categorias/${id}`, setCategoria);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id) {
      await atualizar('/categorias', categoria);
      alert('Categoria atualizada!');
    } else {
      await cadastrar('/categorias', categoria);
      alert('Categoria cadastrada!');
    }

    navigate('/categorias');
  }

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-3xl my-6">
        {id ? 'Editar Categoria' : 'Cadastrar Categoria'}
      </h1>

      <form onSubmit={salvar} className="flex flex-col gap-4 w-1/2">

        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={categoria.titulo}
          onChange={atualizarEstado}
          required
        />

        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={categoria.descricao}
          onChange={atualizarEstado}
          required
        />

        <input
          type="text"
          name="setor"
          placeholder="Setor"
          value={categoria.setor}
          onChange={atualizarEstado}
          required
        />

        <button type="submit" className="bg-green-600 text-white py-2">
          {id ? 'Atualizar' : 'Cadastrar'}
        </button>

      </form>
    </div>
  );
}

export default FormCategoria;
