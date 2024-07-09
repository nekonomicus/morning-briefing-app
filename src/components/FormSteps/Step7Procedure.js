import React, { useState } from 'react';

const Step7Procedure = ({ onSubmit, prevStep }) => {
  const [procedure, setProcedure] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ procedure });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Planned Procedure</h2>
      <textarea
        value={procedure}
        onChange={(e) => setProcedure(e.target.value)}
        placeholder="Enter planned procedure"
        required
      />
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step7Procedure;
