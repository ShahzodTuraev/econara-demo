"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const humadityData = [
  { name: "월요일", value: 30 },
  { name: "화요일", value: 45 },
  { name: "수요일", value: 70 },
  { name: "목요일", value: 40 },
  { name: "금요일", value: 20 },
  { name: "토요일", value: 63 },
  { name: "일요일", value: 54 },
];
const gasData = [
  { name: "월요일", value: 300 },
  { name: "화요일", value: 645 },
  { name: "수요일", value: 710 },
  { name: "목요일", value: 500 },
  { name: "금요일", value: 480 },
  { name: "토요일", value: 800 },
  { name: "일요일", value: 760 },
];
export default function SimpleLineChart({ type }: { type: string }) {
  console.log(type);
  const data = type === "hum" ? humadityData : gasData;
  console.log(data);
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6" // Tailwind 'blue-500'; feel free to remove/change
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
