import "../../css/ItemDisplay.css";

export default function ItemDisplay({
    institution,
    title,
    startDate,
    endDate,
    location,
    description,
}) {
    return (
        <div className="item-display">
            <div>
                <p>{startDate} to {endDate}</p>
                <p>{location}</p>
            </div>
            <div>
                <h3>{institution}</h3>
                <p>{title}</p>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}
