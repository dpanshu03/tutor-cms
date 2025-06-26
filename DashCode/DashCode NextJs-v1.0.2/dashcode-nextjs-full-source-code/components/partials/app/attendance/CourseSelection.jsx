import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const CourseSelection = ({ onCourseSelect }) => {
  const courses = [
    { id: 1, name: "Physics 201", code: "PHY201" },
    { id: 2, name: "Mathematics 101", code: "MATH101" },
    { id: 3, name: "Chemistry 301", code: "CHEM301" },
    { id: 4, name: "Biology 201", code: "BIO201" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Tutor Dashboard Card */}
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Tutor Dashboard</h3>
        <p className="text-gray-600 mb-6">
          Access your teaching dashboard with attendance management, grades, and more
        </p>
        <Button 
          className="w-full bg-slate-800 hover:bg-slate-700 text-white"
          text="Go to Dashboard"
          onClick={() => alert("Dashboard feature coming soon!")}
        />
      </Card>

      {/* Quick Attendance Card */}
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Quick Attendance</h3>
        <p className="text-gray-600 mb-6">
          Start marking attendance immediately for your current class
        </p>
        <Button 
          className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700"
          text="Start Below"
          onClick={() => {
            // Auto-select first course for demo
            onCourseSelect(courses[0]);
          }}
        />
      </Card>

      {/* Course Selection */}
      <div className="lg:col-span-2">
        <Card className="p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Select Course</h3>
          <p className="text-gray-600 text-center mb-6">
            Choose the course for attendance marking
          </p>
          
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📚 Course
            </label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => {
                const selectedCourse = courses.find(c => c.id === parseInt(e.target.value));
                if (selectedCourse) onCourseSelect(selectedCourse);
              }}
              defaultValue=""
            >
              <option value="" disabled>Select a course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.name} ({course.code})
                </option>
              ))}
            </select>
            
            <Button 
              className="w-full mt-6 bg-gray-400 text-white cursor-not-allowed"
              text="Next: Select Section"
              disabled
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseSelection;