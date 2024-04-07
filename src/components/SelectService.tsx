import { useState } from "react";
import useFetchServices from "../hooks/useFetchServices";
import { ExpandIcon, RetractIcon } from "./Icons";
import { SelectServiceProps, Service, ServicesByCategory } from "../types";

export default function SelectService({
  setGlobalSelectedService,
  actualService,
}: SelectServiceProps) {
  const services: Service[] = useFetchServices();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const servicesByCategory: ServicesByCategory = services.reduce(
    (acc: ServicesByCategory, service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    },
    {}
  );

  const handleExpand = (category: string) => {
    setExpandedCategory(category === expandedCategory ? null : category);
  };

  const handleSelect = (service: Service) => {
    setGlobalSelectedService(service);
  };

  return (
    <div className="border-[2px] border-solid border-[#D8DEE3] p-4 mt-6 mb-40 text-[#4B5C6B]">
      <div className="flex flex-col gap-2">
        <h4>Categorías</h4>
        {Object.entries(servicesByCategory).map(
          ([category, services], index) => (
            <div key={index}>
              <article
                onClick={() => handleExpand(category)}
                className="flex justify-between"
              >
                {category}
                <button onClick={() => handleExpand(category)}>
                  {expandedCategory === category ? (
                    <RetractIcon />
                  ) : (
                    <ExpandIcon />
                  )}
                </button>
              </article>
              {expandedCategory === category && (
                <section>
                  {services.map((service) => (
                    <article
                      key={service.id}
                      className="flex flex-col gap-1 border-[2px] border-solid border-[#D8DEE3] p-4 my-2"
                    >
                      <h4>{service.name}</h4>
                      <p>{service.description}</p>
                      <button
                        onClick={() => handleSelect(service)}
                        className={`rounded-sm w-[40%] p-1 ml-[60%] text-white ${
                          actualService?.id === service.id
                            ? "bg-[#4B5C6B]"
                            : "bg-[#788896]"
                        }`}
                      >
                        {actualService?.id === service.id
                          ? "Seleccionado"
                          : "Seleccionar"}
                      </button>
                    </article>
                  ))}
                </section>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
