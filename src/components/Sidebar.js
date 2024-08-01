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
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    <span>
                        Catana
                        <ion-icon name="pencil" onClick={changeName}></ion-icon>
                    </span>
                </div>
            </div>
        </div>
    )
}