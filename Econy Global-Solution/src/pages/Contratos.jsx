import dados from "../data/empresas.json"
import { useState } from "react"
import ContratoCard from "../components/ContratosCard"

export default function Contratos(){

    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // constante que verifica se há o elemento dentro do JSON dados.
    const searchEmpresas = dados.filter(empresa => empresa.busca.toLowerCase().includes(search.toLowerCase()))

    // recuperando lista de IDS via local storage
    const IDS = JSON.parse(localStorage.getItem('IDS'))

    return (
        <>
        <div className="flex flex-col justify-center items-center">  
            <div className="flex w-[100%] h-[25px] bg-[#1E1E1E] justify-center items-center | sm:hidden">
                <h1 className="text-[#00C174]">CONTRATOS</h1>
            </div>
        
        <div className="flex flex-col my-[30px] | sm:mt-0">
           {/* MESMO SISTEMA DE BUSCA DA PAGINA DE EMPRESAS */}
                <input
                    className="min-w-[320px] text-black border-black border-2 rounded-[10px]"
                    type="text"
                    id="search"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Digite o nome da empresa..."
                />

                <div className="grid grid-cols-[320px] justify-center mx-auto max-w-[95%] | sm:grid-cols-[640px]">
                        {   

                        searchEmpresas.length > 0 ?
                       
                            searchEmpresas.map(empresa => (
                                // include, só exibira contratos caso tenham sido realizados na pagina de empresas
                                (empresa.id) in IDS ?
                                <ContratoCard   id = {empresa.id}
                                                empresaImg = {empresa.url} 
                                                empresaNome = {empresa.nome}
                                                selos = {empresa.selos}
                                                contratoValor = {empresa.contrato}/>
                                : null
                            ))
                        :
                        <p>Não há resultados para sua busca.</p>
                    }
                </div>
            </div>
        </div>
        </>
    )
}