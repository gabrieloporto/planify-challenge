import { useEffect, useState } from "react";
import { Service } from "../types";

export default function useFetchServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services.txt");
        const data = await response.json();

        setServices(data.services);
      } catch (error) {
        console.error("Error al obtener servicios:", error);
      }
    };

    fetchServices();
  }, []);

  return services;
}
