import { Pencil, Users, Lightbulb, MousePointerClick } from "lucide-react";

const highlights = [
  {
    icon: Pencil,
    title: "User-Centred Design",
    description:
      "Putting users first through research, testing, and iterative design processes.",
  },
  {
    icon: MousePointerClick,
    title: "Interaction Design",
    description:
      "Crafting intuitive interfaces with seamless flows and delightful micro-interactions.",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Balancing user needs with business goals and technical constraints.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Translating complex challenges into elegant, accessible solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="text-white">
                <br />
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a UX/UI Designer with 15+ years of professional design experience across public sector and elite sports organisations. 
                Strong background in visual design, now applied to user‑centred digital products and services. 
                Experienced in end‑to‑end design processes including discovery, ideation, prototyping, user testing and delivery. 
                Comfortable working with stakeholders, managing complexity, and designing under real‑world constraints.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};