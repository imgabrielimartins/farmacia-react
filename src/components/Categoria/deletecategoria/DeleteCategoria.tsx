import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../model/Categoria";
import { deletar, listar } from "../../../services/Service";

function DeleteCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>(); 

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria, {});
        } catch (error) {
            console.error("Erro ao procurar categoria:", error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {});
            alert("Categoria apagada com sucesso!");
            retornar();
        } catch (error) {
            alert("Erro ao apagar a categoria.");
        }
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Eliminar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className='border-coffee border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-navy text-white font-bold text-2xl'>
                    Categoria
                </header>
                
                <div className="p-8 bg-white">
                    <p className='text-3xl h-full'>
                        {categoria.descricao}
                    </p>
                </div>

                <div className="flex">
                    <button 
                        className='text-white bg-azure hover:bg-navy w-full py-2 transition'
                        onClick={deletarCategoria}
                    >
                        Sim
                    </button>
                    <button 
                        className='w-full text-white bg-azure hover:bg-navy py-2 transition'
                        onClick={retornar}
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCategoria;