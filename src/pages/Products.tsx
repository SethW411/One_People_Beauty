import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { products } from "@/content";

function Intro() {
  const { intro } = products;
  return (
    <Section ambient>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="Products" title={intro.heading} align="center" className="mx-auto" />
        <p className="mt-8 text-lg text-charcoal/80">{intro.body}</p>
      </div>
    </Section>
  );
}

function Grid() {
  return (
    <Section bg="white" reveal={false}>
      <SectionHeading title="The Six Essentials" eyebrow="Shop the Collection" />
      <Stagger className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3" gap={0.08}>
        {products.products.map((p) => (
          <StaggerItem key={p.id} className="h-full">
            <ProductCard product={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Feature() {
  const { feature } = products;
  return (
    <Section className="!bg-cocoa">
      <div className="mx-auto max-w-3xl text-center text-cream">
        <h2 className="text-cream">{feature.heading}</h2>
        <p className="mt-6 text-lg leading-relaxed text-cream/85">{feature.body}</p>
      </div>
    </Section>
  );
}

function Ingredients() {
  const { ingredients } = products;
  return (
    <Section reveal={false}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Ingredients"
          title={ingredients.heading}
          align="center"
          className="mx-auto"
        />
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

export default function Products() {
  return (
    <>
      <Intro />
      <Grid />
      <Feature />
      <Ingredients />
    </>
  );
}
