export const generateId = () => {
    const random = Math.random().toString(36);
    const fecha = Date.now().toString(36);
  
    return random + fecha;
  };
  
  export const formateDate = (date) => {
    const newDate = new Date(date);
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return newDate.toLocaleDateString("es-ES", options);
  };