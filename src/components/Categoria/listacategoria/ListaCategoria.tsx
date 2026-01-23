import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import type Categoria from '../../../model/Categoria';
import { listar } from '../../../services/Service';
import CardCategoria from '../cardcategoria/CardCategoria';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias, {});
        } catch (error) {
            console.error("Erro ao listar categorias", error);
        }
    }

   useEffect(() => {
    buscarCategorias();
}, []);


    return (
        <>
            {categorias.length === 0 && (
                <div className="flex justify-center items-center h-screen">
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                    />
                </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;