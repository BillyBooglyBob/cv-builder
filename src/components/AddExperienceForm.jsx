import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddExperienceForm({ onAdd }) {
  const [experienceToAdd, setExperienceToAdd] = useState({
    id: uuid(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: ""
  });

  const handleInputChange = (field, value) => {
    setExperienceToAdd((prevExperience) => ({
      ...prevExperience,
      [field]: value,
    }));
  };

  const handleAddExperiences = () => {
    onAdd(experienceToAdd);
  };

  return (
    <>
      <p>Experience</p>
      <div>
        <p>Company</p>
        <input
          type="text"
          value={experienceToAdd.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
        />
        <p>Position</p>
        <input
          type="text"
          value={experienceToAdd.degree}
          onChange={(e) => handleInputChange("position", e.target.value)}
        />
        <p>Start Date</p>
        <input
          type="text"
          value={experienceToAdd.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
        />
        <p>End Date</p>
        <input
          type="text"
          value={experienceToAdd.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
        />
        <p>Location</p>
        <input
          type="text"
          value={experienceToAdd.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
        <p>Description</p>
        <input
          type="text"
          value={experienceToAdd.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
      <button onClick={handleAddExperiences}>Submit</button>
    </>
  );
}
