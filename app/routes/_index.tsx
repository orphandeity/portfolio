import Header from "~/components/header";

import type { V2_MetaFunction } from "@remix-run/node";

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
    <>
      <Header />
      <div>
        <h2>
          Hi, I'm Jeff.
          <br />
          Front End <span className="text-fuchsia-600">Developer</span>,
          <br />
          Musician and Cat Lover.
        </h2>
      </div>
      <section>
        <p>
          As a modular synth enthusiast, I am drawn to the intersection of
          technology and creativity.
        </p>
        <p>
          My first experience with programming was during the MySpace era, where
          I discovered the excitement of customizing my profile by experimenting
          with bits of code from all over the web.
        </p>
        <p>
          Years later, the pandemic provided the perfect opportunity to delve
          deeper into this passion, and I found that the skills and confidence I
          had gained during those early days of tinkering came in handy as I
          explored the limitless possibilities of the modern web.
        </p>
        <p>
          Today, I am looking for a full-time position as a Front End Web
          Developer.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <p>
          I have completed a number of online courses and workshops on Web
          Development from platforms such as Codecademy, Frontend Masters and
          Wes Bos. I am currently learning Deep JavaScript Foundations from Kyle
          Simpson.
        </p>
      </section>
      <section>
        <h3>What I've Been Working On</h3>
        <p>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, websites and projects that I’ve been
          working on.
        </p>
      </section>
      <section>
        <h3>Let's Build Something Together</h3>
        <p>
          Feel free to reach out if you’re looking for a developer, have a
          question or just want to connect.
        </p>
      </section>
    </>
  );
}
