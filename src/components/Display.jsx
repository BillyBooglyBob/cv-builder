import BioDisplay from "./display/BioDisplay";
import ItemDisplay from "./display/ItemDisplay";
import "../css/Display.css";

export default function Display({ bio, educations, experiences }) {
    return (
        <div className="display">
            <div className="cv-display">
                <div className="bio">
                    <BioDisplay {...bio} />
                </div>

                <div className="display-section">
                    <h1>Educations</h1>
                    {educations.map((education) => (
                        <ItemDisplay
                            key={"display-education-" + education.id}
                            institution={education.school}
                            title={education.degree}
                            startDate={education.startDate}
                            endDate={education.endDate}
                            location={education.location}
                        />
                    ))}
                </div>

                <div className="display-section">
                    <h1>Experiences</h1>
                    {experiences.map((experience) => (
                        <ItemDisplay
                            key={"display-experience-" + experience.id}
                            institution={experience.company}
                            title={experience.position}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            location={experience.location}
                            description={experience.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
