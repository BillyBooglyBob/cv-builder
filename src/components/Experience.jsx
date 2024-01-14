import { useState } from "react";
import "../css/Section.css";

export default function Experience({
    id,
    company,
    position,
    startDate,
    endDate,
    location,
    description,
    onChange,
    onDelete,
}) {
    // state for deciding if the current education is editable
    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(!editing);
    };

    const handleCompanyChange = (e) => {
        onChange(id, "company", e.target.value);
    };

    const handlePositionChange = (e) => {
        onChange(id, "position", e.target.value);
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

    const handleDescriptionChange = (e) => {
        onChange(id, "location", e.target.value);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <>
            {editing ? (
                <>
                    <div className="edit-form">
                        <h3>School</h3>
                        <input type="text" value={company} onChange={handleCompanyChange} />
                        <h3>Degree</h3>
                        <input type="text" value={position} onChange={handlePositionChange} />
                        <h3>Start Date</h3>
                        <input type="text" value={startDate} onChange={handleStartDateChange} />
                        <h3>End Date</h3>
                        <input type="text" value={endDate} onChange={handleEndDateChange} />
                        <h3>Location</h3>
                        <input type="text" value={location} onChange={handleLocationChange} />
                        <h3>Description</h3>
                        <input type="text" value={description} onChange={handleDescriptionChange} />

                        <div className="buttons">
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={handleEditing}>Save</button>
                        </div>
                    </div>
                </>
            ) : (
                    <div onClick={handleEditing} className="collapsed">
                        <h3>{company}</h3>
                    </div>
            )}
        </>
    );
}
