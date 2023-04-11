import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from "recharts";
const Statistics = () => {
  const marks = [
    {
      assignment: "Assignment 1",
      marks: 60,
    },
    {
      assignment: "Assignment 2",
      marks: 59,
    },
    {
      assignment: "Assignment 3",
      marks: 60,
    },
    {
      assignment: "Assignment 4",
      marks: 55,
    },
    {
      assignment: "Assignment 5",
      marks: 58,
    },
    {
      assignment: "Assignment 6",
      marks: 59,
    },
    {
      assignment: "Assignment 7",
      marks: 60,
    },
    {
      assignment: "Assignment 8",
      marks: 60,
    },
  ];
  return (
    <div>
      <div className="container mx-auto mt-20">
        <div className="text-center">
          <h1>Assignment Marks</h1>
        </div>
        <div className="chart">
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={marks}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="assignment" />
            <PolarRadiusAxis />
            <Radar
              name="Marks"
              dataKey="marks"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
