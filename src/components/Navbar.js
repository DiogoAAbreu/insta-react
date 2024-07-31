export default function Navbar() {
    return (<div className="navbar">
        <Container />
    </div>)
}

const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

function Container() {
    return (
        <div className="container">
            <Logo />
            <LogoMobile />
            <instagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    )
}

function Logo() {
    return (
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>)
}

function LogoMobile() {
    return (
        <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function instagramMobile() {
    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    )
}

function Pesquisa() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>)
}

function Icones() {
    return (
        <div className="icones">
            {icones.map(icone => <ion-icon name={icone}></ion-icon>)}
        </div>
    )
}

function IconesMobile() {
    return (
        <div class="icones-mobile">
            <ion-icon name={icones[0]}></ion-icon>
        </div>
    )
}
