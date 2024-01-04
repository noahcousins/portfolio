export default function Resume() {
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Git' },
    { name: 'GraphQL' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Node.js' },
    { name: 'PostgreSQL' },
    { name: 'Supabase' },
    { name: 'Tailwind CSS' },
    { name: 'Framer Motion' },
    { name: 'AWS' },
    { name: 'Figma' },
    { name: 'Adobe Creative Suite' }
  ];

  const midpoint = Math.ceil(skills.length / 2);
  const skillsColumn1 = skills.slice(0, midpoint);
  const skillsColumn2 = skills.slice(midpoint);

  return (
    <div className="mx-auto flex w-full max-w-screen-md flex-col gap-8 tracking-tight">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Noah Cousins</h1>
        <p className="flex gap-2">
          <span className="">noahcousins.dev@gmail.com</span>
          &#8226;
          <span className="">(207) 227-0483</span>
          &#8226;
          <span className="">linkedin.com/in/noahcousins/</span>
          &#8226;
          <span className="">noahcousins.com</span>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Junior Frontend Developer</h2>
        <p className="flex gap-2 font-light">
          A detail-oriented Junior Frontend Developer well-versed in HTML, CSS,
          and various libraries including React, Next.js, and Tailwind CSS.
          Dedicated to refining user experiences and designing intuitive web
          interfaces. Consistently surpassing project expectations through a
          proactive, self-directed approach, achieving innovation while aligning
          with company objectives.
        </p>
      </div>
      <h3 className="text-sm font-light uppercase">WORK EXPERIENCE</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <div className="flex w-full justify-between">
              <h4 className="text-lg font-medium">Junior Frontend Developer</h4>
              <p className="">10/2022 – Present</p>
            </div>
            <p className="font-normal">Drumify</p>
          </div>

          <ul className="flex flex-col gap-2 font-light">
            <li className="">
              &#8226; Developed numerous responsive websites optimized for both
              mobile and desktop interfaces utilizing HTML and CSS, in
              conjunction with Next.js, GraphQL, and PostgreSQL
            </li>
            <li className="">
              &#8226; Specialized in e-commerce web development, strategically
              emphasizing revenue generation while prioritizing an exceptional
              user experience
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <div className="flex w-full justify-between">
              <h4 className="text-lg font-medium">Music Producer</h4>
              <p className="">01/2019 – Present</p>
            </div>
            <p className="font-normal">Noah Cuz, LLC</p>
          </div>

          <ul className="flex flex-col gap-2 font-light">
            <li className="">
              &#8226; Founded a music production company focused on licensing
              and selling instrumentals to artists online
            </li>
            <li className="">
              &#8226; Leveraged online platform to reach large industry artists,
              generating over 100 million streams
            </li>
          </ul>
        </div>
      </div>
      <h3 className="text-sm font-light uppercase">SKILLS</h3>
      <div className="grid grid-cols-2 font-light">
        <ul className="flex flex-col gap-1">
          {skillsColumn1.map((skill) => (
            <li key={skill.name}>&#8226; {skill.name}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1">
          {skillsColumn2.map((skill) => (
            <li key={skill.name}>&#8226; {skill.name}</li>
          ))}
        </ul>
      </div>
      <h3 className="text-sm font-light uppercase">EDUCATION</h3>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col">
          <div className="flex w-full justify-between">
            <h4 className="text-lg font-medium">
              Bachelor of Science in Audio Engineering
            </h4>
            <p className="">2017 – 2020</p>
          </div>
          <div className="flex flex-col">
            <p className="font-normal">Husson University</p>
            <p className="text-sm font-light">Bangor, Maine</p>
          </div>
        </div>

        <ul className="flex flex-col gap-2 font-light">
          <li className="">
            &#8226; Signal flow, recording technologies, and troubleshooting
          </li>
          <li className="">&#8226; Web development elective</li>
        </ul>
      </div>
      {/* <a href="javascript:window.print()">Download this as a PDF</a> */}
    </div>
  );
}
