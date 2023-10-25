import React from "react";
import '../main.css'

function Card({ data }) {
    return(
        <>
          <li >
            <div className="card">
              <ul>
                <li className="campus">id do cliente: {data.cliente_id}</li>
                <li className="campus">Número do processo: {data.numero_processo}</li>
                <li className="campus">Prazo: {data.proximo_prazo}</li>
                <li className="campus">Arquivo: {data.arquivo}</li>
              </ul>
             
            </div>
              
          </li>
                
        </>
    )
}

export default Card