export default function Stories() {
    return (
        <div className="stories">
            <Story img="assets/img/9gag.svg" usuario="9gag" />
            <Story img="assets/img/meowed.svg" usuario="meowed" />
            <Story img="assets/img/barked.svg" usuario="barked" />
            <Story img="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
            <Story img="assets/img/wawawicomics.svg" usuario="wawawicomics" />
            <Story img="assets/img/respondeai.svg" usuario="respondeai" />
            <Story img="assets/img/filomoderna.svg" usuario="filomoderna" />
            <Story img="assets/img/memeriagourmet.svg" usuario="memeriagourmet" />
            <Setinha />
        </div>)
}

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