import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import ImageFrame from "@/components/ui/ImageFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { personas } from "@/content";

/** Count up when the stat value is a plain integer; otherwise show as-is. */
function StatValue({ value, suffix }: { value: string; suffix?: string }) {
  if (/^\d+$/.test(value)) {
    return <CountUp value={Number(value)} suffix={suffix ?? ""} />;
  }
  return (
    <>
      {value}
      {suffix}
    </>
  );
}

function Overview() {
  const { overview } = personas;
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading title={overview.heading} align="center" />
        <p className="mt-8 text-lg text-charcoal/80">{overview.body}</p>
      </div>
      <div className="mx-auto mt-12 grid max-w-3xl gap-6 tablet:grid-cols-3">
        {overview.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-h1 text-cocoa">
              <StatValue value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-small uppercase tracking-widest text-charcoal/60">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TextureCategories() {
  return (
    <Section bg="white" reveal={false}>
      <SectionHeading
        eyebrow="Textures"
        title="Three patterns, one promise"
        align="center"
        className="mx-auto"
      />
      <Stagger className="mt-12 grid gap-6 tablet:grid-cols-3">
        {personas.textureCategories.map((t) => (
          <StaggerItem key={t.title}>
            <Card interactive className="h-full overflow-hidden p-0">
              <div className="relative">
                <ImageFrame src={t.image} alt={t.title} ratio="aspect-square" rounded={false} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />
              </div>
              <div className="relative -mt-6 px-6 pb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-pill bg-white text-botanical shadow-card">
                  <Icon name={t.icon} size={24} />
                </div>
                <h3 className="text-h3">{t.title}</h3>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function TargetConsumer() {
  const { targetConsumer } = personas;
  return (
    <Section>
      <div className="grid items-center gap-10 tablet:grid-cols-2">
        <ImageFrame src={targetConsumer.image} alt="Our target consumer" ratio="aspect-[4/3]" />
        <div>
          <SectionHeading title={targetConsumer.heading} eyebrow="Target Consumer" />
          <p className="mt-6 text-charcoal/80">{targetConsumer.text}</p>
        </div>
      </div>
    </Section>
  );
}

function Persona() {
  const { persona } = personas;
  return (
    <Section bg="white">
      <SectionHeading eyebrow="Customer Persona" title={persona.name} className="mx-auto" />
      <div className="mt-10 grid gap-10 tablet:grid-cols-[360px_1fr]">
        <ImageFrame
          src={persona.image}
          alt={persona.name}
          ratio="aspect-[4/5]"
          className="mx-auto w-full max-w-[360px]"
        />
        <div>
          <div className="grid grid-cols-2 gap-4">
            {persona.demographics.map((d) => (
              <div key={d.label} className="rounded-card bg-cream p-4">
                <p className="text-small uppercase tracking-widest text-charcoal/55">{d.label}</p>
                <p className="mt-1 font-medium">{d.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            {persona.traits.map((t) => (
              <div key={t.label}>
                <p className="text-small font-semibold uppercase tracking-widest text-botanical">
                  {t.label}
                </p>
                <p className="mt-1 text-charcoal/80">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ShoppingBehavior() {
  return (
    <Section reveal={false}>
      <SectionHeading
        eyebrow="Shopping Behavior"
        title="How she shops"
        align="center"
        className="mx-auto"
      />
      <Stagger className="mt-12 grid gap-6 tablet:grid-cols-3">
        {personas.shoppingBehavior.map((b) => (
          <StaggerItem key={b.trait}>
            <Card className="h-full">
              <h3 className="text-h3">{b.trait}</h3>
              <p className="mt-3 text-small text-charcoal/75">{b.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default function Personas() {
  return (
    <>
      <Overview />
      <TextureCategories />
      <TargetConsumer />
      <Persona />
      <ShoppingBehavior />
    </>
  );
}
