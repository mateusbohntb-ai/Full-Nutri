
//Import das Rotas 
import { Link } from "react-router-dom";
//Import do use state 
import { useState } from "react";
//Import do css para mexer so no Header 
import "./style.css"

function Footer() {
    return (
        <>

<Link to="/Contatos" ><button>Contatos</button></Link>

<Link to="/Terms" ><button>Termos Privacidade</button></Link>
        </>
    )
}

export default Footer
