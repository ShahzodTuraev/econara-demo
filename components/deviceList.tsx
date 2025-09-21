"use client";

import { data } from "@/lib/devicedata";
import { Pencil, Plus, Scan, Search, Trash } from "lucide-react";

export default function DeviceList() {
  const deleteHandler = (serial: number) => {};
  return (
    <main className="w-full p-1.5 bg-white h-140 shadow-sm rounded-md">
      <div className="flex justify-between align-center">
        <h2 className="font-semibold text-gray-800">쓰레기통</h2>
        <div className="flex gap-3 text-gray-600">
          <Plus className="w-5 h-5 hover:text-gray-900 cursor-pointer" />
          <Search className="w-5 h-5 hover:text-gray-900 cursor-pointer" />
          <Scan className="w-5 h-5 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>
      <div className="max-h-130 overflow-y-auto">
        <table className="w-full mt-2">
          <thead>
            <tr className="text-left text-gray-600 text-sm">
              <th>일련번호</th>
              <th>주소</th>
              <th>연결</th>
              <th>가득참</th>
              <th>배터리 부족</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-[13px] text-gray-700 border-b border-gray-300 hover:bg-gray-50"
                >
                  <td className="py-3">{item?.serialNum}</td>
                  <td className="py-3">{item?.address}</td>
                  <td className="py-3">
                    <p className="bg-green-50 w-fit font-semibold text-green-600 rounded-md p-1">
                      {item?.connection}
                    </p>
                  </td>
                  <td className="py-3">{item?.fullness}</td>
                  <td className="py-3">{item?.battery}</td>
                  <td>
                    <div className="flex gap-6 w-15">
                      <Pencil className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />
                      <Trash
                        onClick={() => deleteHandler(item.serialNum)}
                        className="w-5 h-5 cursor-pointer hover:text-red-600 transition"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
