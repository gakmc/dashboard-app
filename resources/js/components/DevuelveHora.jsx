const HoraInicio = (event) => {
  const fechaIsoStart = event.start;
  const fechaObjetoInicio = new Date(fechaIsoStart);
  const diaInicio = fechaObjetoInicio.getUTCDate();
  const mesInicio = fechaObjetoInicio.getUTCMonth() + 1; // Los meses en JavaScript son 0-indexados
  const anioInicio = fechaObjetoInicio.getUTCFullYear();
  const horasInicio = fechaObjetoInicio.getUTCHours();
  const minutosInicio = fechaObjetoInicio.getUTCMinutes();
  const diaFormateadoInicio = diaInicio < 10 ? `0${diaInicio}` : diaInicio;
  const mesFormateadoInicio = mesInicio < 10 ? `0${mesInicio}` : mesInicio;
  const horasFormateadasInicio =
    horasInicio < 10 ? `0${horasInicio}` : horasInicio;
  const minutosFormateadosInicio =
    minutosInicio < 10 ? `0${minutosInicio}` : minutosInicio;
  const fechaFormateadaInicio = `${horasFormateadasInicio}:${minutosFormateadosInicio} - ${diaFormateadoInicio}/${mesFormateadoInicio}/${anioInicio}`;

  return fechaFormateadaInicio;
};

const HoraFin = (event) => {
  const fechaIsoEnd = event.end;

  const fechaObjetoFin = new Date(fechaIsoEnd);

  const diaFin = fechaObjetoFin.getUTCDate();
  const mesFin = fechaObjetoFin.getUTCMonth() + 1; // Los meses en JavaScript son 0-indexados
  const anioFin = fechaObjetoFin.getUTCFullYear();
  const horasFin = fechaObjetoFin.getUTCHours();
  const minutosFin = fechaObjetoFin.getUTCMinutes();

  const diaFormateadoFin = diaFin < 10 ? `0${diaFin}` : diaFin;
  const mesFormateadoFin = mesFin < 10 ? `0${mesFin}` : mesFin;
  const horasFormateadasFin = horasFin < 10 ? `0${horasFin}` : horasFin;
  const minutosFormateadosFin = minutosFin < 10 ? `0${minutosFin}` : minutosFin;

  const fechaFormateadaFin = `${horasFormateadasFin}:${minutosFormateadosFin} - ${diaFormateadoFin}/${mesFormateadoFin}/${anioFin}`;

  return fechaFormateadaFin;
};

export { HoraInicio, HoraFin };
