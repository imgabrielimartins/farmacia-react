import { Link } from 'react-router-dom';
import type Categoria from '../../../model/Categoria';

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriasProps) {

    return (
        <div className='border-azure border flex flex-col rounded overflow-hidden justify-between shadow-md'>
                
            <div>
                <div className="flex w-full bg-coffee py-2 px-4 items-center gap-4">
                    <h3 className='text-lg font-bold text-white uppercase'>
                        Categoria
                    </h3>
                </div>

                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>
                        {categoria.descricao}
                    </h4>

                    <p className='mt-2 text-sm text-gray-600'>
                        ID: {categoria.id}
                    </p>
                </div>
            </div>

            <div className="flex">
                <Link 
                    to={`/atualizarcategoria/${categoria.id}`} 
                    className='w-full text-white bg-navy 
                    hover:bg-azure flex items-center justify-center py-2 transition'
                >
                    Editar
                </Link>

                <Link 
                    to={`/deletecategoria/${categoria.id}`} 
                    className='w-full text-white bg-red-600
                    hover:bg-red-800 flex items-center justify-center py-2 transition'
                >
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria;
