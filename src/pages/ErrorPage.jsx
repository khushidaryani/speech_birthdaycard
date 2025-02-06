import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{ textAlign: "center", marginTop: "50px", color: "#D14D72" }}>
            <h1>¡Caramba! ¿Qué ha pasado aquí?</h1>
            <h2>Parece que ha ocurrido un error</h2>
            <p>No se preocupe, no se lo diré a nadie 🤫</p>
            <p>
                <i>{error?.statusText || error?.message || "Error desconocido"}</i>
            </p>
        </div>
    );
}

export default ErrorPage;
