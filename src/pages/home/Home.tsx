import farmaciahome from '../../assets/img/farmaciahome.jpg'

function Home() {
    return (
        <>
            <main className="bg-navy flex justify-center items-center min-h-[80vh]">
                <section className="container grid grid-cols-1 md:grid-cols-2 text-white px-8">

                    <article className="flex flex-col gap-4 items-center justify-center py-8">
                        <h1 className="text-5xl font-bold text-center">
                            Seja Bem Vindo!
                        </h1>

                        <p className="text-xl text-center">
                            Adquira seus medicamentos na Farmacia Viva!
                        </p>
                    </article>

                    <figure className="flex justify-center items-center">
                        <img
                            src={farmaciahome}
                            alt="Imagem da página inicial"
                            className="w-2/3 rounded-lg"
                        />
                    </figure>

                </section>
            </main>
        </>
    );
}

export default Home;