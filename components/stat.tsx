"use client";

import { useState } from "react";

export default function StatPage() {
  // INITIALIZATION
  const [active, setActive] = useState(0);
  const list = [
    { id: 1, logo: "/img/check.svg", title: "전체 쓰레기통", count: 20 },
    { id: 2, logo: "/img/bin.svg", title: "가득참", count: 2 },
    { id: 3, logo: "/img/battery.svg", title: "배터리 부족", count: 3 },
    { id: 4, logo: "/img/wifi.svg", title: "오프라인", count: 1 },
  ];
  //   HANDLER
  const selectHandler = () => {
    setActive(3);
  };
  return (
    <main className="flex justify-between w-full gap-4">
      {list.map((item) => {
        return (
          <div
            className={`flex gap-2 bg-white w-20 p-1.5 cursor-pointer shadow-sm rounded-md w-full box-border ${
              active === item.id ? "border-b-3 border-blue-700" : ""
            } ${
              active !== item.id
                ? "border-b-3 border-white hover:border-gray-300"
                : ""
            }`}
            key={item.id}
            onClick={() => setActive(item.id)}
          >
            <img className="w-10 h-10" src={item?.logo} alt="svg" />
            <div>
              <p className="text-gray-500 text-xs font-semibold leading-[12px]">
                {item.title}
              </p>
              <p className="text-lg font-semibold">{item.count}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
