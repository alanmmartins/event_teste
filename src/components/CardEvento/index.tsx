import "./style.css"

export default function CardEvento() {
    return (
        <div className="card justify_center align_center direction_column space_evenly">
            <h3>Titulo do Evento</h3>

            <p className="texto_card">Breve descrição do evento, pode ser um paragrafo pequeno</p>

            <a href="" className="texto_conectar">Conectar</a>
        </div>
    )
}
/* card do evento sem alinhar  */