import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../app";
// import Parallax from "./Parallax";

function Example() {
    const [data, setData] = useState([]);
    var fecha;
    var fechaFinal;

    useEffect(() => {
        fetch("http://dash.cl/api/v1/users")
            .then((res) => res.json())
            .then((data) => {
                let pokes = data;
                data = Object.values(pokes);
                setData(data);
            });
    }, []);

    function formatearFechaDesdeAPI(fechaDeAPI) {
        const fechaObj = new Date(fechaDeAPI);
      
        // Obtener componentes individuales de la fecha
        const dia = fechaObj.getDate().toString().padStart(2, '0');
        const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0'); // Meses comienzan desde 0
        const anio = fechaObj.getFullYear();
      
        // Formatear la fecha como "dd-MM-YYYY"
        const fechaFormateada = `${dia}-${mes}-${anio}`;
      
        return fechaFormateada;
      }
    
        
    

    return (
        <div className="App">
            <h1>Fetch Desde API Propia con Laravel 10 y React</h1>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-sm-2 g-3">
                {data?.map((user, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-5 col-sm-4">
                                <img
                                src={`http://dash.cl/storage/avatar/${user.imagen}`}
                                className="img-fluid"
                                alt="card-grid-image"
                                style={{maxHeight:'150px'}}
                            />
                                </div>
                                <div className="col-7 col-sm-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{index + 1} - {user.nombre} {user.apePat} {user.apeMat}</h5>
                                        <p className="card-text">
                                        Direccion: {user.direccion}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Creado: {formatearFechaDesdeAPI(user.created_at)}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("root")) {
    const IndexEx = ReactDOM.createRoot(document.getElementById("root"));

    IndexEx.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    );
}
