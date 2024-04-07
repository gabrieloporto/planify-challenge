import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import SelectService from "./components/SelectService";
import { Service } from "./types";
import StepsButton from "./components/StepsButton";
import { STEP } from "./logic/constants";
import SelectHour from "./components/SelectHour";
import Confirm from "./components/Confirm";

export default function App() {
  const [step, setStep] = useState<string>(STEP.SELECT_SERVICE);

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col mx-4 my-4 md:mx-0">
        <Header step={step} />
        {step === STEP.SELECT_SERVICE ? (
          <SelectService
            setGlobalSelectedService={setSelectedService}
            actualService={selectedService}
          />
        ) : step === STEP.SELECT_HOUR ? (
          <SelectHour
            setGlobalHour={setSelectedHour}
            actualHour={selectedHour}
          />
        ) : (
          <Confirm service={selectedService?.name} date={selectedHour} />
        )}
      </div>

      <section className="fixed bottom-0 left-[50%] translate-x-[-50%] w-full">
        {selectedService && (
          <StepsButton step={step} setStep={setStep} hour={selectedHour} />
        )}
        <NavMenu />
      </section>
    </>
  );
}
