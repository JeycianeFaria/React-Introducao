import react from "react";

function ComponenteComFilhos(props){
    return (
        <div>
            <h1>{props.titulo}</h1>
            <div>
                {props.filhos}
            </div>
        </div>
    )
}

export default ComponenteComFilhos;