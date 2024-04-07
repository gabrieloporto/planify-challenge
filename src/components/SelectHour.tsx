import useFetchHours from "../hooks/useFetchHours";
import { date, formatDate } from "../logic/logic";
import { Hour, SelectedHour } from "../types";

export default function SelectHour({
  setGlobalHour,
  actualHour,
}: SelectedHour) {
  const hours: Hour | undefined = useFetchHours();

  const handleHour = (hour: string) => {
    setGlobalHour(`${date(hours?.date)} ${hour}`);
  };

  return (
    <article className="border-[2px] border-solid border-[#D8DEE3] p-4 mt-6 mb-40 text-[#4B5C6B]">
      <div className="mb-4">Próximos turnos disponibles</div>
      <div className="mb-4">{formatDate(hours?.date)}</div>
      <div className="grid grid-cols-2 gap-4">
        {hours?.availableTimeslots.map((hour, index) => (
          <button
            onClick={() => handleHour(hour)}
            key={index}
            className={`rounded-sm p-2  font-[500] ${
              actualHour?.substring(actualHour.length - 5) === hour
                ? "bg-[#4B5C6B] text-white"
                : "bg-[#C3CFD9] text-[#4B5C6B]"
            }`}
          >
            {hour}
          </button>
        ))}
      </div>
    </article>
  );
}
