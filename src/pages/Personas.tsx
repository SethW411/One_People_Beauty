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
            <Card interactive className="h-full p-4 text-center">
              <ImageFrame src={t.image} alt={t.title} ratio="aspect-square" />
              <div className="mx-auto mt-4 mb-3 flex h-12 w-12 items-center justify-center rounded-pill bg-botanical/10 text-botanical">
                <Icon name={t.icon} size={24} />
              </div>
              <h3 className="text-h3">{t.title}</h3>
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
    </>
  );
}
