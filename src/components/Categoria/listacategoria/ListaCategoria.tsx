import { useEffect, useState } from "react";
import type Categoria from "../../../model/Categoria";
import { listar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    listar("/categorias", setCategorias);
  }, []);

  return (
    <div className="container mx-auto my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {categorias.map((categoria) => (
        <CardCategoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
}

export default ListaCategorias;
