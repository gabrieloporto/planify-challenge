import { STEP } from "../logic/constants";
import { Step } from "../types";

export default function StepsButton({ step, setStep, hour }: Step) {
  const handleNext = () => {
    if (step === STEP.SELECT_SERVICE) {
      setStep(STEP.SELECT_HOUR);
    } else if (step === STEP.SELECT_HOUR) {
      setStep(STEP.CONFIRM);
    }
  };

  const handlePrevious = () => {
    if (step === STEP.CONFIRM) {
      setStep(STEP.SELECT_HOUR);
    } else if (step === STEP.SELECT_HOUR) {
      setStep(STEP.SELECT_SERVICE);
    }
  };

  return (
    <div className="flex justify-between border-y-2 border-solid border-[#D8DEE3] px-4 md:mx-[30%] md:border-2 bg-white">
      <button
        className={`${
          step === STEP.SELECT_SERVICE
            ? "opacity-0 cursor-default disabled"
            : null
        }rounded-sm w-[40%] p-1 text-white bg-[#4B5C6B] my-2`}
        onClick={handlePrevious}
      >
        Atras
      </button>
      {step !== STEP.CONFIRM ? (
        <button
          className="rounded-sm w-[40%] p-1 text-white my-2"
          style={{
            backgroundColor: `${
              step === STEP.SELECT_HOUR && !hour ? "#C9CED2" : "#4B5C6B"
            }`,
          }}
          disabled={step === STEP.SELECT_HOUR && !hour}
          onClick={handleNext}
        >
          Siguiente
        </button>
      ) : (
        <button className="rounded-sm w-[40%] p-1 text-white bg-[#4B5C6B] my-2">
          Confirmar
        </button>
      )}
    </div>
  );
}
