import Education from "./Education";
import IMAGES from "../assets/Images";

export default function Educations({ educations, change, remove }) {
    return (
        <div>
            <div>
                <img src={IMAGES.education} />
                <h1>Educations</h1>
            </div>

            {educations.map((education) => (
                <Education key={education.id} onChange={change} onDelete={remove} {...education} />
            ))}
        </div>
    );
}
