import { useState } from "react";
import "./css/normalise.css";
import "./css/App.css";
import { v4 as uuid } from "uuid";
import Bio from "./components/Bio";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import AddEducationForm from "./components/AddEducationForm";
import AddExperienceForm from "./components/AddExperienceForm";
import Display from "./components/Display";

function App() {
    // states to toggle between sections and form to add new objects
    const [addEducation, setAddEducation] = useState(false);
    const [addExperience, setAddExperience] = useState(false);

    // create states for all the info of the cv
    const [bio, setBio] = useState({
        fullName: "Bob Johns",
        email: "bobjohns@gmail.com",
        number: 12345678,
        address: "Tokyo, Japan",
    });

    const [educations, setEducations] = useState([
        {
            id: uuid(),
            school: "University of Somewhere",
            degree: "Bachelor of something",
            startDate: "20/10/2020",
            endDate: "20/10/2023",
            location: "Somewhere",
        },
    ]);

    const [experiences, setExperiences] = useState([
        {
            id: uuid(),
            company: "Company A",
            position: "Some position",
            startDate: "20/10/2020",
            endDate: "20/10/2023",
            location: "City",
            description: "something something",
        },
    ]);

    const handleBioChange = (field, value) => {
        setBio((prevInfo) => ({
            ...prevInfo,
            [field]: value,
        }));
    };

    // go through the educations array
    // find the specific education
    //
    const handleEducationschange = (id, field, value) => {
        setEducations(
            educations.map((education) => {
                if (education.id === id) {
                    return { ...education, [field]: value };
                } else {
                    return education;
                }
            })
        );
    };

    // for the array, just add the education
    const handleAddEducations = (education) => {
        setEducations([...educations, education]);
        toggleAddEducation();
    };

    const handleDeleteEducations = (id) => {
        setEducations(educations.filter((education) => education.id !== id));
    };

    const handleExperiencesChange = (id, field, value) => {
        setExperiences(
            experiences.map((experience) => {
                if (experience.id === id) {
                    return { ...experience, [field]: value };
                } else {
                    return experience;
                }
            })
        );
    };

    const handleAddExperiences = (experience) => {
        setExperiences([...experiences, experience]);
        toggleAddExperience();
    };

    const handleDeleteExperiences = (id) => {
        setExperiences(experiences.filter((experience) => experience.id !== id));
    };

    const toggleAddEducation = () => {
        setAddEducation(!addEducation);
        toggleAddExperience();
    };

    const toggleAddExperience = () => {
        setAddExperience(!addExperience);
    };

    return (
        <div className="cv">
            <div className="inputs">
                <Bio onChange={handleBioChange} {...bio} />
                {addEducation || addExperience ? (
                    addEducation ? (
                        <>
                            <AddEducationForm onAdd={handleAddEducations} />
                        </>
                    ) : (
                        <>
                            <AddExperienceForm onAdd={handleAddExperiences} />
                        </>
                    )
                ) : (
                    <>
                        <Educations
                            change={handleEducationschange}
                            remove={handleDeleteEducations}
                            educations={educations}
                        />
                        <button onClick={toggleAddEducation}>+ Education</button>

                        <Experiences
                            change={handleExperiencesChange}
                            remove={handleDeleteExperiences}
                            experiences={experiences}
                        />
                        <button onClick={toggleAddExperience}>+ Experience</button>
                    </>
                )}
            </div>
            <div className="display">
                <Display bio={bio} educations={educations} experiences={experiences} />
            </div>
        </div>
    );
}

export default App;
