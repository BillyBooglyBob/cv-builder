export default function Bio({ fullName, email, number, address, onChange }) {
    const handleName = (e) => {
        onChange("fullName", e.target.value);
    };

    const handleEmail = (e) => {
        onChange("email", e.target.value);
    };

    const handleNumber = (e) => {
        onChange("number", e.target.value);
    };

    const handleAddress = (e) => {
        onChange("address", e.target.value);
    };

    return (
        <div>
            <h1>Personal Details</h1>
            <h3>Full Name</h3>
            <input type="text" value={fullName} onChange={handleName} />
            <h3>Email</h3>
            <input type="email" value={email} onChange={handleEmail} />
            <h3>Number</h3>
            <input type="number" value={number} onChange={handleNumber} />
            <h3>Address</h3>
            <input type="text" value={address} onChange={handleAddress} />
        </div>
    );
}
