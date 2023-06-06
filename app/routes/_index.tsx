import Header from "~/components/header";

import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Jeff Williams | Web Developer" },
    {
      name: "description",
      content: "a selection of websites and web apps built by Jeff Williams",
    },
  ];
};

export default function Index() {
  return (
    <div className="container max-w-xs sm:max-w-lg">
      <Header />
      <main className="space-y-16">
        <Hero />
        <section className="space-y-4">
          <p>
            As a modular synth enthusiast, I am drawn to the intersection of
            <span className="text-fuchsia-600 font-normal">
              {" "}
              technology
            </span>{" "}
            and{" "}
            <span className="text-fuchsia-600 font-normal"> creativity</span>.
          </p>
          <p>
            My first experience with programming was during the MySpace era,
            where I discovered the excitement of customizing my profile by
            experimenting with bits of code from all over the web.
          </p>
          <p>
            Years later, the pandemic provided the perfect opportunity to delve
            deeper into this passion, and I found that the skills and confidence
            I had gained during those early days of tinkering came in handy as I
            explored the limitless possibilities of the modern web.
          </p>
          <p>
            Today, I am looking for a full-time position as a
            <span className="text-fuchsia-600 font-normal">
              {" "}
              Front End Web Developer
            </span>
            .
          </p>
        </section>
        <section className="space-y-2">
          <h3>Skills</h3>
          <p>
            I have completed a number of online courses and workshops on Web
            Development from platforms such as Codecademy, Frontend Masters and
            Wes Bos.
            <br />I am currently learning{" "}
            <a
              href="https://frontendmasters.com/courses/deep-javascript-v3/"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 underline font-medium decoration-fuchsia-600"
            >
              Deep JavaScript Foundations
            </a>{" "}
            from Kyle Simpson.
          </p>
        </section>
        <section className="space-y-2">
          <h3>What I've Been Working On</h3>
          <p>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, websites and projects that I’ve
            been working on.
          </p>
        </section>
        <section className="space-y-2">
          <h3>Let's Build Something Together</h3>
          <p>
            Feel free to reach out if you’re looking for a developer, have a
            question or just want to connect.
          </p>
        </section>
      </main>
    </div>
  );
}
