import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { market } from "@/content";

const COCOA = "#5A3E36";
const HONEY = "#D9A441";

function Kpis() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading eyebrow="Business" title={market.heading} align="center" className="mx-auto" />
        {market.intro && <p className="mt-8 text-lg text-charcoal/80">{market.intro}</p>}
      </div>
      <div className="mt-12 grid gap-6 tablet:grid-cols-3">
        {market.kpis.map((k) => (
          <Card key={k.label} className="text-center">
            <p className="font-heading text-h1 text-cocoa">
              <CountUp value={k.value} prefix={k.prefix ?? ""} suffix={k.suffix ?? ""} />
            </p>
            <p className="mt-2 text-small uppercase tracking-widest text-charcoal/60">{k.label}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Charts() {
  return (
    <Section bg="white">
      <div className="grid gap-10 tablet:grid-cols-2">
        <Card>
          <h3 className="text-h3">Global Hair Care Market ($B)</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={market.marketSize}>
                <CartesianGrid stroke="#0000000d" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} width={40} domain={[80, 110]} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke={COCOA} strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-h3">Avg. Annual Product Spend ($)</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={market.spend}>
                <CartesianGrid stroke="#0000000d" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} width={40} />
                <Tooltip />
                <Bar dataKey="value" fill={HONEY} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Narrative() {
  return (
    <Section>
      <div className="grid gap-10 tablet:grid-cols-2">
        {market.narrative.map((b) => (
          <div key={b.heading}>
            <SectionHeading title={b.heading} />
            <div className="mt-5 space-y-4 text-charcoal/80">
              {b.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function Market() {
  return (
    <>
      <Kpis />
      <Charts />
      <Narrative />
    </>
  );
}
