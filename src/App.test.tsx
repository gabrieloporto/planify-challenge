import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

//Asegurarnos de que se haya seleccionado un servicio antes de renderizar el boton Siguiente.
test('no renderizar el boton "Siguiente" si no seleccionamos un servicio.', () => {
  // Simulamos el estado donde selectedService es null
  const { queryByText } = render(<App />);

  // Verificamos que no se renderice StepsButton
  expect(queryByText("Siguiente")).not.toBeInTheDocument();
  expect(queryByText("Atras")).not.toBeInTheDocument();
});
