import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import  {Calendar, momentLocalizer}  from "react-big-calendar";
import M from "materialize-css";

import "../app";
import moment from "moment";

import EventModal from "../components/EventModal";
import { HoraFin, HoraInicio } from "../components/DevuelveHora";



const Agenda = () => {

    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    var [eventos, setEventos] = useState([
    ]);

    const handleEventClick = (event) => {
        // Abre el modal correspondiente al evento clicado
        const modal = document.getElementById(`modal-${event.id}`);
        const instance = M.Modal.getInstance(modal);
        instance && instance.open();
    
        setFechaInicio(HoraInicio(event));
        setFechaFin(HoraFin(event));
      };
    moment.locale('es');
    const localizer = momentLocalizer(moment);
    
    useEffect(() => {
        // Cargar los eventos desde una API o una base de datos
        fetch('http://dash.cl/api/agenda')
            .then((res) => res.json())
            .then((data) => {
                setEventos(data)
            })
    }, []);

    const fecha = moment().calendar();
    const mensajes = {
        today: "Hoy",
        previous: "Atrás",
        next: "Siguiente",
        month: "Mes",
        week: "Semana",
        day: "Día",
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
        format: "MMMM YYYY",
        weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split(
            "_"
        ),
        weekdaysShort: "Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Agenda - Fecha {fecha}</div>

                        <div className="card-body">
                            <Calendar
                                localizer={localizer}
                                events={eventos}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500 }}
                                messages={mensajes}
                                onSelectEvent={handleEventClick}
                            />

                        </div>
                    </div>
            {eventos.map((event) => (
                    <EventModal
                      key={event.id}
                      eventId={event.id}
                      title={event.title}
                      desde={fechaInicio}
                      hasta={fechaFin}
                      description={event.description}
                    />
                  ))}
                </div>
            <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">add</i></a>
            </div>
        
        </div>
    );
};

export default Agenda;

if (document.getElementById("agenda")) {
    const Indexag = ReactDOM.createRoot(document.getElementById("agenda"));

    Indexag.render(
        <React.StrictMode>
            <Agenda />
        </React.StrictMode>
    );
}
