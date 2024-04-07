import { STEP } from "../logic/constants";
import { HeaderStep } from "../types";

export default function Header({ step }: HeaderStep) {
  return (
    <header>
      <div className="text-[#5E6E7B] font-bold">
        {step === STEP.SELECT_SERVICE
          ? "Seleccionar servicio"
          : step === STEP.SELECT_HOUR
          ? "Seleccionar horario"
          : "Confirmar turno"}
      </div>
      <div className="relative h-4 bg-[#D8DEE3] rounded-sm overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-teal-500`}
          style={{
            width: `${
              step === STEP.SELECT_SERVICE
                ? "20%"
                : step === STEP.SELECT_HOUR
                ? "60%"
                : "80%"
            }`,
          }}
        ></div>
      </div>
    </header>
  );
}
