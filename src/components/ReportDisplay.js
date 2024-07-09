import React from 'react';

const ReportDisplay = ({ formData }) => {
  return (
    <div>
      <h2>Morning Briefing Report</h2>
      <p><strong>Patient:</strong> {formData.gender} {formData.lastNameInitial}., Age: {formData.age}</p>
      <p><strong>Anamnesis:</strong> {formData.anamnesis}</p>
      <p><strong>Diagnosis:</strong> {formData.diagnosis}</p>
      <p><strong>Examination Findings:</strong> {formData.examination}</p>
      <p><strong>Relevant History:</strong> {formData.history}</p>
      <p><strong>Comorbidities:</strong> {formData.comorbidities}</p>
      <p><strong>Planned Procedure:</strong> {formData.procedure}</p>
    </div>
  );
};

export default ReportDisplay;
