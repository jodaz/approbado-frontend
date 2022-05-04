export default function(values) {
    const errors = {};
    console.log(values)
    if (!values.trivia_id) {
        errors.trivia_id = "Seleccione una trivia.";
    }
    if (!values.level_id) {
        errors.level_id = "Seleccione un nivel.";
    }
    if (!values.title) {
        errors.title = "Ingrese un título para la reunión.";
    }
    if (!values.subtheme_id) {
        errors.subtheme_id = "Seleccione un subtema.";
    }
    if (!values.users_ids) {
        errors.users_ids = "Seleccione un participante.";
    }

    return errors;
}