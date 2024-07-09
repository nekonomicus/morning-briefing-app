import React, { useState } from 'react';
import Step1PatientInfo from './FormSteps/Step1PatientInfo';
import Step2Anamnesis from './FormSteps/Step2Anamnesis';
import Step3Diagnosis from './FormSteps/Step3Diagnosis';
import Step4Examination from './FormSteps/Step4Examination';
import Step5History from './FormSteps/Step5History';
import Step6Comorbidities from './FormSteps/Step6Comorbidities';
import Step7Procedure from './FormSteps/Step7Procedure';
import ReportDisplay from './ReportDisplay';

const MorningBriefingApp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleFormData = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  switch (currentStep) {
    case 1:
      return <Step1PatientInfo onSubmit={handleFormData} />;
    case 2:
      return <Step2Anamnesis onSubmit={handleFormData} prevStep={prevStep} />;
    case 3:
      return <Step3Diagnosis onSubmit={handleFormData} prevStep={prevStep} />;
    case 4:
      return <Step4Examination onSubmit={handleFormData} prevStep={prevStep} />;
    case 5:
      return <Step5History onSubmit={handleFormData} prevStep={prevStep} />;
    case 6:
      return <Step6Comorbidities onSubmit={handleFormData} prevStep={prevStep} />;
    case 7:
      return <Step7Procedure onSubmit={handleFormData} prevStep={prevStep} />;
    case 8:
      return <ReportDisplay formData={formData} />;
    default:
      return <div>Error: Unknown step</div>;
  }
};

export default MorningBriefingApp;
