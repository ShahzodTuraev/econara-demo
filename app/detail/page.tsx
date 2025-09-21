"use client";
import SimpleLineChart from "@/components/charts";
import DeviceList from "@/components/deviceList";
import NavbarPage from "@/components/navbar";
import StatPage from "@/components/stat";
import moment from "moment";

export default function Dashboard() {
  return (
    <main className="h-screen bg-gray-50">
      <NavbarPage type={"detail"} />
      <div className="p-2 flex justify-between">
        <section className="w-[47%] flex flex-col gap-2 ">
          <div className="flex gap-2">
            <div className="w-[49%] bg-white shadow-sm rounded-md p-2">
              <h1 className="font-medium text-gray-800 py-2">
                쓰레기통 583748623
              </h1>
              <div className="border-b border-gray-300 py-3 px-2">
                <p className="text-xs text-gray-500 py-1"> 주소:</p>
                <p className="text-sm text-gray-800 pb-1"> 강남대로 45길 12</p>
              </div>
              <div className="border-b border-gray-300 py-3 px-2">
                <p className="text-xs text-gray-500 py-1"> 가득참:</p>
                <p className="text-sm text-gray-800 pb-1"> 29%</p>
              </div>
              <div className="border-b border-gray-300 py-3 px-2">
                <p className="text-xs text-gray-500 py-1"> 배터리 부족:</p>
                <p className="text-sm text-gray-800 pb-1"> 45%</p>
              </div>
              <div className="border-b border-gray-300 py-3 px-2">
                <p className="text-xs text-gray-500 py-1"> 습도:</p>
                <p className="text-sm text-gray-800 pb-1"> 70%</p>
              </div>
              <div className="border-b border-gray-300 py-3 px-2">
                <p className="text-xs text-gray-500 py-1">
                  {" "}
                  CO<sub>2</sub>:
                </p>
                <p className="text-sm text-gray-800 pb-1"> 850 ppm</p>
              </div>
            </div>
            <div className="w-[49%] shadow-sm rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d197.87574369970855!2d126.94558360666649!3d37.4840455718234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x357c9f8faf8c1793%3A0x307629ad3b227595!2zU2VvdWwsIEd3YW5hay1ndSwgQm9uZ2NoZW9uLWRvbmcsIDkwOSAzMuuyiOyngCDsnbTrp4jtirgyNOq0gOyVheu0ieyynOuhnDkx7KCQIDHsuLU!3m2!1d37.4841457!2d126.94547659999999!5e0!3m2!1sen!2skr!4v1758495185915!5m2!1sen!2skr"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-md p-2 mt-5">
            <h1 className="p-3 font-bold">알림:</h1>
            <p className="text-gray-700 pl-4">
              배터리 잔량이 부족함 (20%) [{moment().format("YYYY-MM-DD hh:mm")}]
            </p>
          </div>
        </section>
        <section className="w-[52%] ">
          <h1 className="px-3 font-bold py-1 text-gray-700">습도: (%)</h1>
          <SimpleLineChart type={"hum"} />
          <h1 className="px-3 font-bold py-1 text-gray-700">
            {" "}
            CO<sub>2</sub>: (ppm)
          </h1>
          <SimpleLineChart type={"gas"} />
          <h1 className="px-3 font-bold py-1 text-gray-700">배터리 부족:</h1>
          <SimpleLineChart type={"bat"} />
        </section>
      </div>
    </main>
  );
}
