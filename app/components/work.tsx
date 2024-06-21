import { Gi3dHammer, GiBookPile, GiPaperFrog, GiToaster } from "react-icons/gi";

export default function Work() {
  return (
    <div id="work" className="bg-stone-50 px-5 py-32 sm:px-20">
      <div className="flex flex-col items-center gap-2">
        <div className="text-balance text-center text-4xl font-bold">
          Where I've been working
        </div>
        <div className="h-1 w-40 rounded-sm bg-cyan-600 sm:w-56"></div>
      </div>
      <div className="mx-auto mt-20 grid w-auto max-w-3xl gap-x-4 gap-y-6 sm:grid-cols-2">
        <Card
          company="Toast"
          role="Fontend Engineer II"
          start="Jun 2023"
          end="Present"
          description="Working on the Toast.org team to bring new features to restaurants with a focus on sustainability, reducing food waste, and giving back to local communities."
          color={{
            border: "border-orange-600",
            hoverBg: "hover:bg-orange-600",
            hoverText: "hover:text-white",
            iconColor: "text-white",
          }}
          url="https://toast.org"
          icon={<GiToaster className="h-10 w-10" />}
        />
        <Card
          company="Redis"
          role="Frontend Engineer"
          start="Dec 2023"
          end="Apr 2024"
          description="Redis is a fast, in-memory database. I had the opportunity to work on their rebranding, redesigning several pages to match their new look and feel."
          color={{
            border: "border-red-500",
            hoverBg: "hover:bg-red-500",
            hoverText: "hover:text-white",
            iconColor: "text-white",
          }}
          url="https://redis.io"
          icon={<GiBookPile className="h-10 w-10" />}
        />
        <Card
          company="Markforged"
          role="Software Engineer II"
          start="Jul 2022"
          end="Nov 2023"
          description="Markforged builds printers that make really strong parts. While here, I worked on an internal tool to speed up hardware development and built a bunch of features for their core web app."
          color={{
            border: "border-yellow-300",
            hoverBg: "hover:bg-yellow-300",
            hoverText: "hover:text-black",
            iconColor: "text-black",
          }}
          url="https://markforged.com"
          icon={<Gi3dHammer />}
        />
        <Card
          company="Rivet"
          role="Software Engineer"
          start="Jun 2021"
          end="Jul 2022"
          description="Rivet is trying to make health insurance more transparent. I worked on their SaaS platfosm, building features to make it easier for providers to manage claims and revenue."
          color={{
            border: "border-purple-700",
            hoverBg: "hover:bg-purple-700",
            hoverText: "hover:text-white",
            iconColor: "text-white",
          }}
          url="https://rivethealth.com"
          icon={<GiPaperFrog />}
        />
      </div>
    </div>
  );
}

function Card({
  company,
  role,
  start,
  end,
  description,
  color,
  url,
  icon,
}: {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  color: {
    border: string;
    hoverBg: string;
    hoverText: string;
    iconColor: string;
  };
  url: string;
  icon: JSX.Element;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`block w-full rounded-xl border sm:even:-mb-20 sm:even:mt-20 ${color.border} bg-stone-50 p-4 text-black ${color.hoverBg} ${color.hoverText} group transition-[background-color,color,transform,shadow] duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
    >
      <h1 className="flex flex-row justify-between text-2xl">
        <span className="font-medium">{company}</span>
        <div
          className={`${color.iconColor}  opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
        >
          {icon}
        </div>
      </h1>
      <p className="mt-8">{role}</p>
      <p className="mt-1 text-sm opacity-75">
        {start} to {end}
      </p>
      <p className="mt-2">{description}</p>
    </a>
  );
}
