import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddEducationForm({ onAdd }) {
  const [educationToAdd, setEducationToAdd] = useState({
    id: uuid(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleInputChange = (field, value) => {
    setEducationToAdd((prevEducation) => ({
      ...prevEducation,
      [field]: value,
    }));
  };

  const handleAddEducations = () => {
    onAdd(educationToAdd);
  };

  return (
    <>
      <p>EDUCATION</p>
      <div>
        <p>School</p>
        <input
          type="text"
          value={educationToAdd.school}
          onChange={(e) => handleInputChange("school", e.target.value)}
        />
        <p>Degree</p>
        <input
          type="text"
          value={educationToAdd.degree}
          onChange={(e) => handleInputChange("degree", e.target.value)}
        />
        <p>Start Date</p>
        <input
          type="text"
          value={educationToAdd.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
        />
        <p>End Date</p>
        <input
          type="text"
          value={educationToAdd.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
        />
        <p>Location</p>
        <input
          type="text"
          value={educationToAdd.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
      </div>
      <button onClick={handleAddEducations}>Submit</button>
    </>
  );
}
