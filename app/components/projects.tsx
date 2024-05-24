import { GiDragonOrb, GiMaze, GiMonaLisa, GiTomato } from "react-icons/gi";

export default function Projects() {
  return (
    <div id="projects" className="bg-stone-100 px-5 py-32 sm:px-20">
      <div className="flex flex-col items-center gap-2">
        <div className="text-balance text-center text-4xl font-bold">
          Some stuff I've made
        </div>
        <div className="h-1 w-40 rounded-sm bg-cyan-600 sm:w-56"></div>
      </div>
      <div className="mx-auto mt-20 flex max-w-3xl flex-col gap-4">
        <Card
          title="Flaurd"
          description="Web app designed to make downloadable and 3D printable floor plans. Still has a bunch of bugs I need to fix, but it works."
          icon={<GiMaze className="h-10 w-10" />}
          color={{
            iconHover: "group-hover:text-blue-700",
            linkHover: "hover:text-blue-700",
          }}
          links={[
            {
              url: "https://github.com/IsItGreg/floorplaner",
              text: "View code",
            },
            { url: "https://floor.gsme.dev/", text: "View demo" },
          ]}
        />
        <Card
          title="Paste-a-sauce"
          description="Simple browser extension to save texts that you may want to copy to your clipboard later."
          icon={<GiTomato className="h-10 w-10" />}
          color={{
            iconHover: "group-hover:text-red-700",
            linkHover: "hover:text-red-700",
          }}
          links={[
            {
              url: "https://github.com/IsItGreg/paste-a-sauce",
              text: "View code",
            },
            {
              url: "https://chromewebstore.google.com/detail/paste-a-sauce/cgadjcfhfbfbblhlfoejhokcmbbkcbpa",
              text: "As a Chrome extension",
            },
            {
              url: "https://addons.mozilla.org/en-GB/firefox/addon/paste-a-sauce/",
              text: "As a Firefox add-on",
            },
          ]}
        />
        <Card
          title="Photo portfolio"
          description="A site to showcase some of my favorite photographs that I've taken over the last few years."
          icon={<GiMonaLisa className="h-10 w-10" />}
          color={{
            iconHover: "group-hover:text-green-700",
            linkHover: "hover:text-green-700",
          }}
          links={[
            {
              url: "https://github.com/IsItGreg/PhotoPortfolio",
              text: "View code",
            },
            { url: "https://photo.gsme.dev/", text: "View portfolio" },
          ]}
        />
        <Card
          title="This site"
          description="Meant to be a digital version of my resume, I try to update it every now and then."
          icon={<GiDragonOrb className="h-10 w-10" />}
          color={{
            iconHover: "group-hover:text-yellow-700",
            linkHover: "hover:text-yellow-700",
          }}
          links={[
            {
              url: "https://github.com/IsItGreg/gsme.dev-v3",
              text: "View code",
            },
          ]}
        />
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  icon,
  color,
  links,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  color: {
    iconHover: string;
    linkHover: string;
  };
  links: { url: string; text: string }[];
}) {
  return (
    <div className="group z-0 rounded-xl border border-black bg-stone-100 p-4 transition-transform hover:scale-105 hover:shadow-lg">
      <div className={`flex flex-row gap-4 `}>
        <div className={`${color.iconHover}`}>{icon}</div>
        <div className="flex w-full flex-col gap-4 md:gap-2">
          <div>
            <h1 className="text-lg font-medium">{title}</h1>
            <p className="mt-4">{description}</p>
          </div>
          <div className="flex flex-col justify-end whitespace-nowrap text-right md:flex-row md:gap-4">
            {links.map(({ url, text }) => (
              <a
                key={url}
                className={`hover:underline ${color.linkHover}`}
                href={url}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
