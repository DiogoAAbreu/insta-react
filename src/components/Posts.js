import React from 'react';

export default function Posts() {
    return (
        <div className="posts">
            {postInfo.map(info => <Story imgTopo={info.imgTopo} usuario={info.usuario} conteudo={info.conteudo} imgCurtiu={info.imgCurtiu} usuarioCurtiu={info.usuarioCurtiu} />)}
        </div>
    )
}

const postInfo =
    [
        {
            imgTopo: "assets/img/meowed.svg",
            usuario: "meowed",
            conteudo: "assets/img/gato-telefone.svg",
            imgCurtiu: "assets/img/respondeai.svg",
            usuarioCurtiu: "respondeai"
        },
        {
            imgTopo: "assets/img/barked.svg",
            usuario: "barked",
            conteudo: "assets/img/dog.svg",
            imgCurtiu: "assets/img/adorable_animals.svg",
            usuarioCurtiu: "adorable_animals"
        }
    ]

function Story(props) {
    return (
        <div className='post'>
            <Topo imgTopo={props.imgTopo} usuario={props.usuario} />
            <Conteudo conteudo={props.conteudo} />
            <Fundo imgCurtiu={props.imgCurtiu} usuarioCurtiu={props.usuarioCurtiu} />
        </div>
    )
}


function Topo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.imgTopo} />
                {props.usuario}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {
    return (
        <div className="conteudo">
            <img src={props.conteudo} />
        </div>
    )
}

function Fundo(props) {
    const [curtir, setCurtir] = React.useState(<ion-icon name="heart-outline" onClick={() => { curtirPostagem() }}></ion-icon>)
    let curtido = false;

    function curtirPostagem() {
        if (!curtido) {
            setCurtir(<ion-icon name="heart" onClick={() => { curtirPostagem() }} className></ion-icon>)
            curtido = true;
        } else {
            setCurtir(<ion-icon name="heart-outline" onClick={() => { curtirPostagem() }}></ion-icon>)
            curtido = false;
        }
    }

    return (
        <div className="fundo">
            <div className="acoes">
                <div>
                    {curtir}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.imgCurtiu} />
                <div class="texto">
                    Curtido por <strong>{props.usuario}</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    )
}

