import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const AttendanceMarking = ({ course, section, onSubmit, onBack }) => {
  const [students] = useState([
    { rollNo: "P201A001", name: "Michael Roberts", status: "Present", time: "10:00 AM" },
    { rollNo: "P201A002", name: "Sarah Williams", status: "Present", time: "10:02 AM" },
    { rollNo: "P201A003", name: "James Brown", status: "Present", time: "09:58 AM" },
    { rollNo: "P201A004", name: "Emma Davis", status: "Present", time: "10:01 AM" },
  ]);

  const [attendanceData, setAttendanceData] = useState(
    students.reduce((acc, student) => {
      acc[student.rollNo] = {
        status: student.status,
        time: student.time,
        remarks: ""
      };
      return acc;
    }, {})
  );

  const handleStatusChange = (rollNo, status) => {
    setAttendanceData(prev => ({
      ...prev,
      [rollNo]: { ...prev[rollNo], status }
    }));
  };

  const handleRemarksChange = (rollNo, remarks) => {
    setAttendanceData(prev => ({
      ...prev,
      [rollNo]: { ...prev[rollNo], remarks }
    }));
  };

  const handleSubmit = () => {
    const finalData = {
      course: course.name,
      section: section.name,
      date: new Date().toLocaleDateString("en-US", { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      students: students.map(student => ({
        ...student,
        ...attendanceData[student.rollNo]
      })),
      summary: {
        total: students.length,
        present: Object.values(attendanceData).filter(d => d.status === "Present").length,
        absent: Object.values(attendanceData).filter(d => d.status === "Absent").length,
        late: Object.values(attendanceData).filter(d => d.status === "Late").length
      }
    };
    onSubmit(finalData);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700"
              text="← Back"
              onClick={onBack}
            />
            <div>
              <h3 className="text-xl font-semibold">Mark Attendance</h3>
              <p className="text-gray-600">{course.name} - {section.name}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <span>📅 6/10/2025</span>
                <span>👥 4/4 marked</span>
              </div>
            </div>
          </div>
          <Button 
            className="bg-slate-800 hover:bg-slate-700 text-white"
            text="💾 Save & Continue"
            onClick={handleSubmit}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 font-medium text-gray-700">Roll No.</th>
                <th className="text-left py-3 font-medium text-gray-700">Student Name</th>
                <th className="text-left py-3 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 font-medium text-gray-700">In Time</th>
                <th className="text-left py-3 font-medium text-gray-700">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.rollNo} className="border-b hover:bg-gray-50">
                  <td className="py-4 font-medium">{student.rollNo}</td>
                  <td className="py-4">{student.name}</td>
                  <td className="py-4">
                    <select 
                      className="px-3 py-2 border border-gray-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500"
                      value={attendanceData[student.rollNo]?.status}
                      onChange={(e) => handleStatusChange(student.rollNo, e.target.value)}
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Late">Late</option>
                    </select>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span>{attendanceData[student.rollNo]?.time}</span>
                      <button className="text-gray-400 hover:text-gray-600">
                        🕐
                      </button>
                      <button className="text-red-400 hover:text-red-600">
                        🔴
                      </button>
                    </div>
                  </td>
                  <td className="py-4">
                    <input 
                      type="text" 
                      placeholder="Optional"
                      className="px-3 py-2 border border-gray-300 rounded-lg w-32 text-sm"
                      value={attendanceData[student.rollNo]?.remarks}
                      onChange={(e) => handleRemarksChange(student.rollNo, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AttendanceMarking;