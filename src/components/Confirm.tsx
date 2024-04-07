import { ConfirmType } from "../types";

export default function Confirm({ service, date }: ConfirmType) {
  return (
    <article className="border-[2px] border-solid border-[#D8DEE3] p-4 mt-6 text-[#4B5C6B]">
      <div>Servicio: {service}</div>
      <div>Fecha: {date}</div>
    </article>
  );
}
