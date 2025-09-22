export default function NavbarPage({ type }: { type: string }) {
  return (
    <main className="w-full bg-[#00695C] flex justify-between align-center shadow-md px-5 py-3 text-white">
      <h1 className="text-xl font-semibold">
        에코나라{type === "detail" ? "> 쓰레기통 583748623" : ""}
      </h1>
    </main>
  );
}
