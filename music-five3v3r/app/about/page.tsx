import NavBar from "../components/navbar";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-5 px-10 font-mono">
      <h2 className="text-yellow text-4xl mt-10">WTF is this?</h2>
      <p>
        <strong className="text-pink">music.five3v3r.com</strong> is a all in
        one tool for helping online music communites! We offer a platform
        capable of taking music file submissions for the purpose of competitions
        or submissions to <strong className="text-pink">radio.five3v3r</strong>(
        <i>coming soon</i>)
      </p>
      <p>
        <b className="text-yellow">Submission Moderation Service - </b> tired of
        managing a ton of google forms for every event and manually organizing
        and curating your submissions? let{" "}
        <strong className="text-pink">music.five3v3r</strong> help with our easy
        submission setup and moderation platform. Get your moderators onboarded
        to start going through submissions in our helpful tool that lets you
        easily sort through and provide feedback on submissions. Then once
        you're done easily export your curated list for easy upload to other
        services or plug them into your community{" "}
        <strong className="text-pink">radio.five3v3r</strong>(<i>coming soon</i>
        ) stream.
      </p>

      <h2 className="text-yellow text-4xl mt-10">
        What is <strong className="text-pink">five3v3r</strong>?
      </h2>

      <p>
        <strong className="text-pink">five3v3r</strong> is my
        project/label/company/what3v3r it needs to be. The goal of{" "}
        <strong className="text-pink">five3v3r</strong> is to provide tools and
        resources to the online music community to help it grow and prosper. Its
        like if a non-profit wasn't corrupt and open sourced everything it did
        for the good of the communities it served... like they're supposed to.
        Right now its just the label/company that handles everything music and
        software related costs for{" "}
        <a
          href="https://soundcloud.com/gwen3v3r"
          target="blank"
          className="text-purple underline underline-offset-2 font-bold"
        >
          GWEN3v3r
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/boymeat-girl"
          target="blank"
          className="text-purple underline underline-offset-2 font-bold"
        >
          Boymeat Girl
        </a>
      </p>
    </main>
  );
}
