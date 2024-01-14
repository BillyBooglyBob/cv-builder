import IMAGES from "../../assets/Images";

export default function BioDisplay({ fullName, email, number, address }) {
    return (
        <div>
            <h1>{fullName}</h1>
            <div>
                <div>
                    <img src={IMAGES.email} />
                    <h2>{email}</h2>
                </div>

                <div>
                    <img src={IMAGES.phone} />
                    <h2>{number}</h2>
                </div>

                <div>
                    <img src={IMAGES.address} />
                    <h2>{address}</h2>
                </div>
            </div>
        </div>
    );
}
