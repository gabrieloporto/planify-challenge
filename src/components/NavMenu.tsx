import { CoffeIcon } from "./Icons";

export default function NavMenu() {
  return (
    <nav className="flex justify-center items-center gap-8 bg-white w-full">
      <button className="flex flex-col justify-center items-center p-2 text-[#6558F5] border-b-4 border-solid border-[#6558F5]">
        <CoffeIcon fillColor="#6558F5" />
        <div>Reservar</div>
      </button>
      <button className="flex flex-col justify-center items-center p-2 text-[#4B5C6B] border-b-4 border-solid border-transparent">
        <CoffeIcon fillColor="#4B5C6B" />
        <div>Mis turnos</div>
      </button>
    </nav>
  );
}
