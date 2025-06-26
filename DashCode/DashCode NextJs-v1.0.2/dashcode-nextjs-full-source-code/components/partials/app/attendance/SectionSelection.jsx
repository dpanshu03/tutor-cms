import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const SectionSelection = ({ course, onSectionSelect, onBack }) => {
  const [selectedSection, setSelectedSection] = useState("");

  const sections = [
    { id: "A", name: "Section A", students: 25 },
    { id: "B", name: "Section B", students: 22 },
    { id: "C", name: "Section C", students: 28 },
  ];

  const handleSubmit = () => {
    const section = sections.find(s => s.id === selectedSection);
    if (section) {
      onSectionSelect(section);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        
        <h3 className="text-xl font-semibold text-center mb-2">Select Section</h3>
        <p className="text-gray-600 text-center mb-6">
          Choose section for {course.name}
        </p>
        
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            👥 Section
          </label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">Select a section</option>
            {sections.map(section => (
              <option key={section.id} value={section.id}>
                {section.name} ({section.students} students)
              </option>
            ))}
          </select>
          
          <div className="flex gap-4 mt-6">
            <Button 
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
              text="← Back"
              onClick={onBack}
            />
            <Button 
              className={`flex-1 ${selectedSection ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-400 cursor-not-allowed'} text-white`}
              text="View Students"
              onClick={handleSubmit}
              disabled={!selectedSection}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SectionSelection;