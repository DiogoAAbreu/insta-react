export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario />
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Usuario() {
    return (

        <div className="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    Catana
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

function Sugestoes() {
    return (
        <div className="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => <Sugestao imgSugestao={sugestao.imgSugestao} sugestao={sugestao.sugestao} />)}
        </div>
    )
}

const sugestoes =
    [
        {
            imgSugestao: "assets/img/bad.vibes.memes.svg",
            sugestao: "bad.vibes.memes"
        },
        {
            imgSugestao: "assets/img/chibirdart.svg",
            sugestao: "chibirdart"
        },
        {
            imgSugestao: "assets/img/razoesparaacreditar.svg",
            sugestao: "razoesparaacreditar"
        }, {
            imgSugestao: "assets/img/adorable_animals.svg",
            sugestao: "adorable_animals"
        }, {
            imgSugestao: "assets/img/smallcutecats.svg",
            sugestao: "smallcutecats"
        }
    ]

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imgSugestao} />
                <div class="texto">
                    <div class="nome">{props.sugestao}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}