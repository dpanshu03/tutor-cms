"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CourseSelection from "@/components/partials/app/attendance/CourseSelection";
import SectionSelection from "@/components/partials/app/attendance/SectionSelection";
import AttendanceMarking from "@/components/partials/app/attendance/AttendanceMarking";
import AttendanceSummary from "@/components/partials/app/attendance/AttendanceSummary";

const AttendancePage = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1: Course, 2: Section, 3: Marking, 4: Summary
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [attendanceData, setAttendanceData] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCurrentStep(2);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setCurrentStep(3);
  };

  const handleAttendanceSubmit = (data) => {
    setAttendanceData(data);
    setCurrentStep(4);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStartOver = () => {
    setCurrentStep(1);
    setSelectedCourse(null);
    setSelectedSection(null);
    setAttendanceData(null);
  };

  return (
    <div className="attendance-system">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900">
          {currentStep === 1 && "Tutor Dashboard"}
          {currentStep === 2 && "Select Section"}
          {currentStep === 3 && "Mark Attendance"}
          {currentStep === 4 && "Attendance Summary"}
        </h4>
      </div>

      {currentStep === 1 && (
        <CourseSelection onCourseSelect={handleCourseSelect} />
      )}
      
      {currentStep === 2 && (
        <SectionSelection 
          course={selectedCourse}
          onSectionSelect={handleSectionSelect}
          onBack={handleBack}
        />
      )}
      
      {currentStep === 3 && (
        <AttendanceMarking 
          course={selectedCourse}
          section={selectedSection}
          onSubmit={handleAttendanceSubmit}
          onBack={handleBack}
        />
      )}
      
      {currentStep === 4 && (
        <AttendanceSummary 
          course={selectedCourse}
          section={selectedSection}
          attendanceData={attendanceData}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
};

export default AttendancePage;