import { FC } from "react";


interface ObjetoProps {
    titulo:string;
    subtitulo: string;
}

const Header: FC<ObjetoProps >=(props):JSX.Element=>{
    const {titulo, subtitulo}= props;

    return (
        <div>
            <h1>{titulo}</h1>
            <p>{subtitulo} </p>
        </div>
    )
}
export default Header