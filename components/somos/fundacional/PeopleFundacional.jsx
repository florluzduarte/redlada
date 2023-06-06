//Library
import Image from "next/image";
import { CircleFlag } from "react-circle-flags";

//Data
import members from "../../../data/members.json";

const PeopleFundacional = () => {
  return (
    <section>
      <div>
        {members.foundational.map(({ id, country, flag, name, photo }) => (
          <div key={id}>
            <Image
              src={photo}
              alt={name}
              width={120}
              height={120}
              unoptimized
            />
            <div>
              <p>{name}</p>
              <div>
                <CircleFlag countryCode={flag.code} />
                <p>{country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleFundacional;
