const experiences = [
  {
    period: "2019 — Present",
    role: "Senior Designer (UX/UI-leaning)",
    company: "Aston Villa Football Club",
    description:
      "Designing user-focused digital and print experiences across ticketing, retail, hospitality and internal platforms. Leading seasonal campaigns, mentoring junior designers, and translating business objectives into clear, engaging digital outputs under tight deadlines. Previously worked as Middleweight Designer (2019-2021) delivering concept development for large-scale campaigns including ticket sales and kit launches.",
    technologies: ["User Research", "Prototyping", "Accessibility", "Brand Systems", "Campaign Design"],
    current: true,
  },
  {
    period: "2018 — 2019",
    role: "Graphic Designer",
    company: "Curtis Sport",
    description:
      "Led design of matchday programmes for football, rugby league, rugby union and speedway clubs. Worked directly with clients to define requirements and deliver consistent, user-friendly editorial layouts balancing brand guidelines and production constraints.",
    technologies: ["Editorial Design", "Typography", "Client Relations", "Layout Systems"],
    current: false,
  },
  {
    period: "2012 — 2018",
    role: "Digital Experience Designer",
    company: "West Midlands Combined Authority",
    description:
      "Delivered user-centred design solutions for public transport, smart travel and community initiatives. Created UI prototypes, ran internal user testing sessions, and designed the Swift smart travel card visual identity across digital, print and environmental applications. Previously worked as Corporate Design Executive (2012-2016) designing digital and physical touchpoints while working with multiple stakeholders to align user needs and policy requirements.",
    technologies: ["UI Design", "User Testing", "Prototyping", "Public Sector Design", "Accessibility"],
    current: false,
  },
  {
    period: "2010 — 2011",
    role: "Junior Designer",
    company: "Abstract Design",
    description:
      "Designed print and digital marketing materials including mailers, templates and promotional assets. Produced reusable templates enabling non-designers to create consistent marketing outputs while adhering to strict brand guidelines.",
    technologies: ["Template Design", "Brand Guidelines", "Marketing Materials", "Production"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-medium
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-medium text-white">
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            15+ years of designing user-centred experiences across elite sports, public sector and commercial organisations—from junior designer to senior UX/UI specialist.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-medium mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};