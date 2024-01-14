import { useState } from "react";
import "../css/Section.css";

export default function Education({
    id,
    school,
    degree,
    startDate,
    endDate,
    location,
    onChange,
    onDelete,
}) {
    // state for deciding if the current education is editable
    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(!editing);
    };

    const handleSchoolChange = (e) => {
        onChange(id, "school", e.target.value);
    };

    const handleDegreeChange = (e) => {
        onChange(id, "degree", e.target.value);
    };

    const handleStartDateChange = (e) => {
        onChange(id, "startDate", e.target.value);
    };

    const handleEndDateChange = (e) => {
        onChange(id, "endDate", e.target.value);
    };

    const handleLocationChange = (e) => {
        onChange(id, "location", e.target.value);
    };

    const handleDelete = () => {
        onDelete(id);
        console.log(id);
    };

    return (
        <>
            {editing ? (
                <>
                    <div className="edit-form">
                        <h3>School</h3>
                        <input type="text" value={school} onChange={handleSchoolChange} />
                        <h3>Degree</h3>
                        <input type="text" value={degree} onChange={handleDegreeChange} />
                        <h3>Start Date</h3>
                        <input type="text" value={startDate} onChange={handleStartDateChange} />
                        <h3>End Date</h3>
                        <input type="text" value={endDate} onChange={handleEndDateChange} />
                        <h3>Location</h3>
                        <input type="text" value={location} onChange={handleLocationChange} />

                        <div className="buttons">
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={handleEditing}>Save</button>
                        </div>
                    </div>
                </>
            ) : (
                <div onClick={handleEditing} className="collapsed">
                    <h3>{school}</h3>
                </div>
            )}
        </>
    );
}
