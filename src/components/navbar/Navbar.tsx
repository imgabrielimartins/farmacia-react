import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="w-full flex justify-center py-4 bg-azure text-white shadow-sm">
            <div className="container flex justify-between items-center px-8">
                
                <Link to='/home' className="text-2xl font-bold tracking-tight">
                    Farmacia Viva
                </Link>

                <div className="flex items-center gap-6">
                    <Link to='/categorias' className="hover:underline decoration-2 underline-offset-4">
                        Listar Categorias
                    </Link>
                    
                    <Link to='/cadastrar-categoria' className="hover:underline decoration-2 underline-offset-4">
                        Cadastrar/Atualizar Categoria
                    </Link>

                     <Link to='/cadastrar-categoria' className="hover:underline decoration-2 underline-offset-4">
                        Deletar Categoria
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;