import { ChangeEvent, useEffect, useState, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../../model/Categoria';
import { atualizar, cadastrar, listar } from '../../../services/Service';

function FormCategoria() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
    });

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria, {});
        } catch (error) {
            console.error('Erro ao buscar categoria por ID', error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/categorias/${categoria.id}`, categoria, setCategoria, {});
                alert('Categoria atualizada com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar a Categoria');
                return;
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {});
                alert('Categoria cadastrada com sucesso!');
            } catch (error) {
                alert('Erro ao cadastrar a Categoria');
                return;
            }
        }

        navigate('/categorias');
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Ex: medicamentos para dor"
                        name="descricao"
                        className="border-2 border-navy rounded p-2 focus:outline-none focus:ring-2 focus:ring-matcha"
                        value={categoria.descricao}
                        onChange={atualizarEstado}
                        required
                    />
                </div>

                <button
                    className="rounded text-white bg-navy hover:bg-azure w-1/2 py-2 mx-auto block transition font-bold"
                    type="submit"
                >
                    {id !== undefined ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
