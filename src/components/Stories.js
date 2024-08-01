export default function Stories() {
    return (
        <div className="stories">
            {usuariosStories.map(usuario => <Story img={usuario.img} usuario={usuario.usuario} />)}
            <Setinha />
        </div>)
}

const usuariosStories =
    [
        {
            img: "assets/img/9gag.svg",
            usuario: "9gag"
        },
        {
            img: "assets/img/meowed.svg",
            usuario: "meowed"
        },
        {
            img: "assets/img/barked.svg",
            usuario: "barked"
        },
        {
            img: "assets/img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet"
        },
        {
            img: "assets/img/wawawicomics.svg",
            usuario: "wawawicomics"
        },
        {
            img: "assets/img/respondeai.svg",
            usuario: "respondeai"
        },
        {
            img: "assets/img/memeriagourmet.svg",
            usuario: "memeriagourmet"
        },

    ]

function Story(props) {
    return (
        <div className="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>)
}

function Setinha() {
    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>)
}