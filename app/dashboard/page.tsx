"use client";
import DeviceList from "@/components/deviceList";
import NavbarPage from "@/components/navbar";
import StatPage from "@/components/stat";

export default function Dashboard() {
  return (
    <main className="h-screen bg-gray-50">
      <NavbarPage />
      <div className="p-2 flex justify-between">
        <section className="w-[47%] flex flex-col gap-2">
          <StatPage />
          <DeviceList />
        </section>
        <section className="w-[52%] border">sec2</section>
      </div>
    </main>
  );
}
