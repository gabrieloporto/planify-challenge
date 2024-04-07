export const formatDate = (inputDate: string | undefined): string => {
  if (!inputDate) {
    return "Fecha no disponible";
  }

  const fecha = new Date(inputDate);

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dia = fecha.getDate() + 1;
  const mes = meses[fecha.getMonth()];

  return dia + " de " + mes;
};

export const date = (date: string | undefined) => {
  if (!date) {
    return "Fecha no disponible";
  }

  const newDate = new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return newDate;
};
