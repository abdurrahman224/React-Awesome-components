import React from "react";
import { Pie, PieChart } from 'recharts';


const studentSubject = [
  { name: "Ayesha", Math: 85, English: 78, Science: 90, Bangla: 88, ICT: 92 },
  { name: "Rahim", Math: 72, English: 81, Science: 75, Bangla: 50, ICT: 85 },
  { name: "Sadia", Math: 90, English: 95, Science: 40, Bangla: 89, ICT: 98 },
  { name: "Mahmud", Math: 33, English: 70, Science: 68, Bangla: 75, ICT: 72 },
  { name: "Taslima", Math: 88, English: 85, Science: 92, Bangla: 87, ICT: 90 },
  { name: "Rakibul", Math: 78, English: 80, Science: 82, Bangla: 76, ICT: 84 },
  { name: "Nusrat", Math: 91, English: 89, Science: 94, Bangla: 93, ICT: 96 },
  { name: "Fahim", Math: 69, English: 75, Science: 72, Bangla: 70, ICT: 74 },
  { name: "Sabbir", Math: 83, English: 79, Science: 88, Bangla: 85, ICT: 87 },
  { name: "Mim", Math: 95, English: 92, Science: 97, Bangla: 94, ICT: 99 },
];

const StudentChart = () => {


    const totalMarks  = studentSubject.map((marks)=>({

 name: marks.name,
 total: marks.Bangla+marks.English+marks.Science+marks.Math

    }))
  return (
    <div className="mt-20">
      {/* className="mt-20"
      style={{ width: "80%", maxWidth: "700px", height: "70vh" }}
       */}
    
      {/* <ResponsiveContainer width="80%" height="80%">
        <LineChart
          data={studentSubjectMarks}
          margin={{ top: 5, right: 20, left: 1, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="8 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Math"
            stroke="#8884D8"
            activeDot={{ r: 15 }}
          />
          <Line type="monotone" dataKey="English" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Science" stroke="#d4d884" />
          <Line type="monotone" dataKey="Bangla" stroke="#d884aa" />
          <Line type="monotone" dataKey="ICT" stroke="#413f6b" />
        </LineChart>
      </ResponsiveContainer> */}


       {/* <LineChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={studentSubjectMarks}
    >
      <Line type="monotone" dataKey="ICT" stroke="#8884d8" strokeWidth={2} />
      <Line type="monotone" dataKey="Science" stroke="#413f6b" strokeWidth={2} />
    </LineChart> */}



    {/* <LineChart
      layout="vertical"
      style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
      responsive
      data={studentSubjectMarks}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" width="auto" />
      <Tooltip />
      <Legend />
      <Line dataKey="ICT" stroke="#8884d8" />
      <Line dataKey="Bangla" stroke="#82ca9d" />
      <Line dataKey="Math" stroke="#82ca9d" />
      <Line dataKey="English" stroke="#82ca9d" />
      <Line dataKey="Science" stroke="#82ca9d" />
    
    </LineChart> */}

      {/* <LineChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={studentSubjectMarks}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </LineChart> */}

      {/* <LineChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={studentSubjectMarks}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line connectNulls type="monotone" dataKey="Math" stroke="#8884d8" fill="#8884d8" />
        <Line connectNulls type="monotone" dataKey="English" stroke="#8884d8" fill="#8884d8" />
        <Line connectNulls type="monotone" dataKey="Science" stroke="#8884d8" fill="#8884d8" />
      </LineChart> */}

        {/* <BarChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={studentSubjectMarks}
    >
      <Bar dataKey="Math" fill="#8884d8" />
      <Bar dataKey="English" fill="#060611" />
      <Bar dataKey="Math" fill="#8884d8" />
      <Bar dataKey="Math" fill="#8884d8" />
    </BarChart> */}
  <PieChart
      style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
    >
      <Pie
        data={totalMarks}
        dataKey="total"
        cx="50%"
        cy="50%"
        outerRadius="50%"
        fill="#8884d8"
        isAnimationActive={true}
      />

  
      <Pie
        data={totalMarks}
        dataKey="total"
        cx="50%"
        cy="50%"
        outerRadius="50%"
        fill="#8884d8"
        isAnimationActive={true}
      />
  
    </PieChart>

    </div>
    
  );
};

export default StudentChart;
