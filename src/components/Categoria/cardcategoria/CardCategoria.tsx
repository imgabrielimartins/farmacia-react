import { Link } from 'react-router-dom';
import type Categoria from '../../../model/Categoria';

interface Props {
  categoria: Categoria;
}

function CardCategoria({ categoria }: Props) {
  return (
    <div className='border border-gray-300 rounded shadow-md flex flex-col justify-between'>
      
      <div>
        <div className="bg-blue-800 text-white p-3 font-bold">
          {categoria.titulo}
        </div>

        <div className="p-4">
          <p>{categoria.descricao}</p>
          <p className="text-sm mt-2">Setor: {categoria.setor}</p>
        </div>
      </div>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full bg-blue-600 text-white text-center py-2"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full bg-red-600 text-white text-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
