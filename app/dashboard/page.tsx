"use client";
import DeviceList from "@/components/deviceList";
import NavbarPage from "@/components/navbar";
import StatPage from "@/components/stat";

export default function Dashboard() {
  return (
    <main className="h-screen bg-gray-50">
      <NavbarPage type="dashboard" />
      <div className="p-2 flex justify-between">
        <section className="w-[47%] flex flex-col gap-2">
          <StatPage />
          <DeviceList />
        </section>
        <section className="w-[52%] border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d197.87574369970855!2d126.94558360666649!3d37.4840455718234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x357c9f8faf8c1793%3A0x307629ad3b227595!2zU2VvdWwsIEd3YW5hay1ndSwgQm9uZ2NoZW9uLWRvbmcsIDkwOSAzMuuyiOyngCDsnbTrp4jtirgyNOq0gOyVheu0ieyynOuhnDkx7KCQIDHsuLU!3m2!1d37.4841457!2d126.94547659999999!5e0!3m2!1sen!2skr!4v1758495185915!5m2!1sen!2skr"
            className="w-full h-full"
          ></iframe>
        </section>
      </div>
    </main>
  );
}
