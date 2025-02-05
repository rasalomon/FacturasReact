import PropTypes from "prop-types"

export const CompanniaView = ({ compannia }) => {
    return (
        <>
            <li className="list-group-item">Nombre de la compañia: {compannia.nombre}</li>
            <li className="list-group-item">Numero fiscal: {compannia.NumeroFiscal}</li>

        </>
    )
}

CompanniaView.proptypes = {
    compannia: PropTypes.object.isRequired
}