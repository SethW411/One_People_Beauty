import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import ImageFrame from "@/components/ui/ImageFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { about } from "@/content";

function MissionFull() {
  const { missionFull } = about;
  return (
    <Section ambient>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-h2 tablet:text-h1">{missionFull.heading}</h1>
        <div className="mt-6 space-y-4 text-charcoal/80">
          {missionFull.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Founder() {
  const { founder } = about;
  return (
    <Section bg="white">
      <div className="grid items-center gap-10 tablet:grid-cols-[320px_1fr]">
        <ImageFrame
          src={founder.photo}
          alt={founder.name}
          ratio="aspect-[4/5]"
          className="mx-auto w-full max-w-[320px]"
        />
        <div>
          <SectionHeading eyebrow="Our Founder" title={founder.name} />
          <p className="mt-2 text-small font-medium uppercase tracking-widest text-botanical">
            {founder.role}
          </p>
          <div className="mt-5 space-y-4 text-charcoal/80">
            {founder.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Problem() {
  const { problem } = about;
  return (
    <Section bg="sand" reveal={false}>
      <SectionHeading eyebrow="Why We Exist" title={problem.heading} align="center" className="mx-auto" />
      <Stagger className="mt-12 grid gap-6 tablet:grid-cols-3">
        {problem.points.map((pt) => (
          <StaggerItem key={pt.title}>
            <Card className="h-full">
              <h3 className="text-h3">{pt.title}</h3>
              <p className="mt-3 text-small text-charcoal/75">{pt.body}</p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Solution() {
  const { solution } = about;
  return (
    <Section bg="white" reveal={false}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={solution.heading} eyebrow="Our Solution" align="center" className="mx-auto" />
        <p className="mt-8 text-charcoal/80">{solution.intro}</p>
      </div>
      <Stagger className="mt-12 grid gap-6 tablet:grid-cols-3">
        {solution.pillars.map((s) => (
          <StaggerItem key={s.title}>
            <Card interactive className="h-full text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-pill bg-honey/15 text-cocoa">
                <Icon name={s.icon} size={28} />
              </div>
              <h3 className="mt-5 text-h3">{s.title}</h3>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-10 text-center">
        <Button to="/products" variant="secondary">
          Explore the Collection
        </Button>
      </div>
    </Section>
  );
}

function Ingredients() {
  const { ingredients } = about;
  return (
    <Section bg="white" reveal={false}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={ingredients.heading} align="center" className="mx-auto" />
        <p className="mt-8 text-charcoal/80">{ingredients.intro}</p>
      </div>
      <Stagger className="mt-12 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
        {ingredients.items.map((ing) => (
          <StaggerItem key={ing.name}>
            <Card className="h-full text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-pill bg-botanical/10 text-botanical">
                <Icon name="Leaf" size={24} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{ing.name}</h3>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function MarketTeaser() {
  return (
    <Section>
      <div className="rounded-card bg-cocoa px-8 py-10 text-center text-cream">
        <h3 className="text-h3 text-cream">Market Opportunity</h3>
        <div className="mt-6">
          <Button to="/market" variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-cocoa">
            See our Market Opportunity →
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default function About() {
  return (
    <>
      <MissionFull />
      <Founder />
      <Problem />
      <Solution />
      <Ingredients />
      <MarketTeaser />
    </>
  );
}
