import type { ButtonProps } from "@relume_io/relume-ui";
import { MyAnimatedBeam } from "./MyAnimatedBeam";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type ProfileProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Profile = (props: ProfileProps) => {
  const { heading, description } = {
    ...ProfileDefaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 z-50">
      <div className="container z-50">
        <div className="z-50 grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-9xl lg:text-10xl max-sm:text-[#4d4e4f]">{heading}</h1>
            <p className="md:text-md text-sm">{description}</p>
          </div>
          <div>
            {/* <img src={image.src} className="w-full object-cover" alt={image.alt} /> */}
            <MyAnimatedBeam />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProfileDefaults: ProfileProps = {
  heading: "Node.js developer",
  description:
    "A full-stack developer using React and Next technologies for Front-End, with extensive knowledge of back-end development using NodeJS (ExpressJS) and (SQL and noSQL databases) technologies, in addition RestFull-APIs.",
  image: {
    src: "/public/",
    alt: "personal photo",
  },
};

Profile.displayName = "Profile";
