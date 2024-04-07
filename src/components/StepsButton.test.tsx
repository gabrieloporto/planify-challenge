import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepsButton from "./StepsButton";
import { STEP } from "../logic/constants";

//Paso "Seleccionar servicio"
test('botón "Siguiente" habilitado cuando estemos en el paso Seleccionar servicio.', () => {
  // Simulamos el estado donde estamos en el paso "Seleccionar servicio"
  const { getByText } = render(
    <StepsButton step={STEP.SELECT_SERVICE} setStep={() => {}} hour={null} />
  );

  // Verificamos que el botón "Siguiente" esté habilitado
  const siguienteButton = getByText("Siguiente");
  expect(siguienteButton).toBeEnabled();
});

//Paso "Seleccionar Horario"
test('botón "Siguiente" deshabilitado cuando no seleccionamos un horario.', () => {
  // Simulamos el estado donde estamos en el paso "Seleccionar horario" pero no se ha seleccionado un horario
  const { getByText } = render(
    <StepsButton step={STEP.SELECT_HOUR} setStep={() => {}} hour={null} />
  );

  // Verificamos que el botón "Siguiente" esté deshabilitado
  const siguienteButton = getByText("Siguiente");
  expect(siguienteButton).toBeDisabled();
});

test('botón "Siguiente" habilitado cuando seleccionamos un horario.', () => {
  // Simulamos el estado donde se ha seleccionado un horario
  const { getByText } = render(
    <StepsButton step={STEP.SELECT_HOUR} setStep={() => {}} hour="10:00" />
  );

  // Verificamos que el botón "Siguiente" esté habilitado
  const siguienteButton = getByText("Siguiente");
  expect(siguienteButton).toBeEnabled();
});

//Paso "Confirmar turno"
test('botón "Confirmar" y "Atras" prensente en el paso "Confirmar turno.', () => {
  // Simulamos el paso Confirmar Turno (paso final)
  const { queryByText } = render(
    <StepsButton step={STEP.CONFIRM} setStep={() => {}} hour="10:00" />
  );

  // Verificamos que los botones "Confirmar" y "Atras" estén presentes
  expect(queryByText("Confirmar")).toBeInTheDocument();
  expect(queryByText("Atras")).toBeInTheDocument();
});
