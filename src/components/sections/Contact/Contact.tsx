'use client'
function Contact() {
    return (
        <section className="bg-[#2D2D2D] py-32">
            <div className="container flex flex-col justify-between gap-8 2xl:flex-row">
                <div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-color-purble">Receba Ofertas</h1>
                        <div className="w-2/3">
                            <p className="text-xxs text-white">
                                Cadastre-se para garantir o desconto na sua primeira compra e entre na lista VIP
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-end">
                        <label className="flex flex-col gap-3 text-xl font-medium text-white">
                            Nome*
                            <input
                                type="text"
                                name="name"
                                placeholder="Digite seu primeiro nome"
                                className="h-12 rounded-full bg-[#5B5B5B] px-6 text-base font-normal text-white outline-none placeholder:text-[#C7C7C7] focus:ring-2 focus:ring-color-mauve"
                            />
                        </label>

                        <label className="flex flex-col gap-3 text-xl font-medium text-white">
                            E-mail
                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu melhor e-mail"
                                className="h-12 rounded-full bg-[#5B5B5B] px-6 text-base font-normal text-white outline-none placeholder:text-[#C7C7C7] focus:ring-2 focus:ring-color-mauve"
                            />
                        </label>

                        <button
                            type="submit"
                            className="h-12 rounded-full bg-color-purble px-8 text-lg font-medium text-white transition-colors hover:bg-[#A94CCF]">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
