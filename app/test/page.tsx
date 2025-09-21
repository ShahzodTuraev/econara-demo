// components/SensorDashboard.tsx
import React from "react";

const SensorDashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Top Section: Sensor Info + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sensor Info Card */}
        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold">Sensor 389021001228</h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium">Address:</span> 10th St, 1126
            </p>
            <p>
              <span className="font-medium">Latitude:</span> 33.88556160962825
            </p>
            <p>
              <span className="font-medium">Longitude:</span>{" "}
              -118.39735616112131
            </p>
            <p>
              <span className="font-medium">Fullness level:</span>{" "}
              <span className="text-blue-600 font-semibold">58%</span>
            </p>
            <p>
              <span className="font-medium">Battery level:</span>{" "}
              <span className="text-red-600 font-semibold">27%</span>
            </p>
            <p>
              <span className="font-medium">Connection:</span>{" "}
              <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-600 rounded">
                Online
              </span>
            </p>
            <p>
              <span className="font-medium">Last update:</span> 22 Sep 2025
              07:56
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white shadow rounded-xl h-80 flex items-center justify-center">
          <p className="text-gray-500">[ Map Placeholder ]</p>
        </div>
      </div>

      {/* Alarms Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Alarms</h3>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-3 border-b">Originator</th>
              <th className="p-3 border-b">Created Time</th>
              <th className="p-3 border-b">Type</th>
              <th className="p-3 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border-b">389021001228</td>
              <td className="p-3 border-b">2025-09-22 04:36:20</td>
              <td className="p-3 border-b text-red-600">Low Battery Level</td>
              <td className="p-3 border-b text-red-600">27%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SensorDashboard;
