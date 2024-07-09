import React, { useState } from 'react';

const Step3Diagnosis = ({ onSubmit, prevStep }) => {
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ diagnosis });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Diagnosis</h2>
      <textarea
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        placeholder="Enter patient's diagnosis"
        required
      />
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step3Diagnosis;
