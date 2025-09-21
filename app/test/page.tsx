"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function BinsTable() {
  const [bins] = useState([
    {
      serial: "389021001228",
      address: "10th St, 1126",
      connection: "Online",
      fullness: 0,
      battery: 36,
    },
    {
      serial: "389021001241",
      address: "9th St, 1501",
      connection: "Online",
      fullness: 5,
      battery: 25,
    },
    {
      serial: "389021001250",
      address: "23rd St, 1600",
      connection: "Online",
      fullness: 93,
      battery: 89,
    },
    {
      serial: "389021001264",
      address: "Sepulveda Blvd, 1730",
      connection: "Online",
      fullness: 44,
      battery: 14,
    },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Bins</h2>

      <div className="overflow-y-auto max-h-64">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-gray-100">
            <tr className="text-left border-b">
              <th className="p-2">Serial Number</th>
              <th className="p-2">Address</th>
              <th className="p-2">Connection</th>
              <th className="p-2">Fullness</th>
              <th className="p-2">Battery Level</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bins.map((bin, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-2">{bin.serial}</td>
                <td className="p-2">{bin.address}</td>
                <td className="p-2">
                  <span className="px-2 py-1 rounded-md text-sm bg-green-100 text-green-700">
                    {bin.connection}
                  </span>
                </td>
                <td
                  className={`p-2 ${
                    bin.fullness >= 80 ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  {bin.fullness}%
                </td>
                <td
                  className={`p-2 ${
                    bin.battery <= 20 ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  {bin.battery}%
                </td>
                <td className="p-2 flex justify-center gap-3">
                  <button className="text-gray-600 hover:text-blue-600">
                    <Pencil size={18} />
                  </button>
                  <button className="text-gray-600 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" max-h-60 overflow-y-auto border rounded-lg p-3">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
        <p>Item 5</p>
        <p>Item 6</p>
        <p>Item 7</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
        <p>Item 8</p>
      </div>
    </div>
  );
}
