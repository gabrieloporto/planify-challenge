import { useEffect, useState } from "react";
import { Hour } from "../types";

export default function useFetchHours() {
  const [hours, setHour] = useState<Hour>();

  useEffect(() => {
    const fetchHour = async () => {
      try {
        const response = await fetch("/slot.txt");
        const data = await response.json();

        setHour(data);
      } catch (error) {
        console.error("Error al obtener horarios:", error);
      }
    };

    fetchHour();
  }, []);

  return hours;
}
