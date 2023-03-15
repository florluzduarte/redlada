import { CircleFlag } from "react-circle-flags";
import members from "../data/members.json";

export default function TestPage() {
    return (
        <div>
            <h1>Test Page</h1>
            {
                members.core.map((member) => (
                    <div key={member.id}>
                        <h2>{member.name}</h2>
                        <CircleFlag countryCode={member.flag.code} width={48} height={48} alt="Bandera argentina" />
                    </div>
                ))
            }
        </div>
    )
}