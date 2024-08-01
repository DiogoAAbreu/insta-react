export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario />
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