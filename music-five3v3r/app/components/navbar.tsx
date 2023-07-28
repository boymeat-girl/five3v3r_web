import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex gap-3 mx-auto justify-center">
      {[
        ["Home", "/"],
        ["logo", ""],
        ["About", "/about"],
      ].map(([name, route], idx) =>
        name == "logo" ? (
          <div
            key={`logo`}
            className="bg-yellow rounded-full h-32 w-32 relative "
          >
            <Image
              className="p-2 "
              src="/music-five3v3r-logo.svg"
              alt="music-five3v3r Logo"
              objectFit="contain"
              layout="fill"
              priority
            />
          </div>
        ) : (
          <a
            key={`route-${route}`}
            href={route}
            className="underline underline-offset-4 mt-auto text-purple font-bold"
          >
            {name}
          </a>
        )
      )}
    </div>
  );
}
