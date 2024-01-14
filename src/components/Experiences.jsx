import Experience from "./Experience";
import IMAGES from "../assets/Images";

export default function Experiences({ experiences, change, remove }) {
    return (
        <div>
            <div>
                <img src={IMAGES.work} />
                <h1>Experiences</h1>
            </div>

            {experiences.map((experience) => (
                <Experience
                    key={experience.id}
                    onChange={change}
                    onDelete={remove}
                    {...experience}
                />
            ))}
        </div>
    );
}
