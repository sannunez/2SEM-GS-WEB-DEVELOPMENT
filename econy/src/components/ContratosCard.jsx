import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function ContratoCard({id, empresaImg, selos, contratoValor, empresaNome}){
    
    // buscando dicionario de IDS e Emissões
    const IDS = JSON.parse(localStorage.getItem('IDS'))


    const [estadoContrato, setEstadoContrato] = useState("")

    useEffect(()=>{
       IDS[id].includes('realizado')
       ? setEstadoContrato('contrato realizado') 
       : setEstadoContrato('contrato pendente...')       
    })

    return(
    
        <div className="divContrato | sm:flex sm:flex-row">

            {/* LADO SUPERIOR/ESQUERDO */}
            <div className="contratoSupEsq | sm:w-[60%]">
                <div className="relative">
                    <img className="rounded-t-[15px]" src={`../../images/empresas/${empresaImg}.png`} alt={empresaNome} />
                    <div className="grid grid-cols-[30px] gap-2 sm:gap-1 ml-2 absolute top-[30%] | sm:grid-cols-[20px] sm:top-[40%]">
                        {
                            selos.map(selos => (
                                <img key={selos} className="seloIcon | sm:h-[20px]" src={`../../images/selos/${selos}.png`} alt={`${selos}`}/>
                            )
                            )
                        }
                    </div>
                </div>
                <div className="idContainer | sm:h-[20%]">
                    <p>{`ID: ${id}`}</p>
                </div>
            </div>

            {/* LADO INFERIOR/DIREITO */}
            <div className="contratoInfDir | sm:justify-center sm:h-[165px] sm:gap-2 ">
                <div className="sm:w-[100%]">
                    <div className="contratoCompra | sm:p-[8px] sm:text-[20px]">
                        <p>COMPRA</p>
                        <img className="w-[25px]" src="../../images/iconCO2.png" alt="CO2"/>
                        <p>{contratoValor}</p>
                    </div>
                    <div className="buttonContratoContainer">
                        <button className={`buttonContrato ${estadoContrato === "contrato realizado"? "bg-[#1E1E1E] text-white" : " bg-white text-[#00C174] "} | sm:w-[50%] sm:text-[16px]`}>{estadoContrato}</button>
                        <Link to={id} className="flex sm:w-[50%]"><button className="buttonContrato bg-[#00C174] text-white hover:bg-white hover:text-[#00C174] transition ease-in-out duration-300 | sm:w-[100%] sm:text-[16px]">GERENCIAR</button></Link>
                    </div>
                </div>
                <p className="w-[100%] py-[2px] text-center text-white font-medium | sm:text-[20px]">DATA DE EMISSÃO: {IDS[id][0]}</p>
            </div>
                <hr className="w-[100%] border-[1px] | sm:hidden" />
        </div>
       
    )
}