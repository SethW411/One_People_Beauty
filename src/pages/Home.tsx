import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import ImageFrame from "@/components/ui/ImageFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { EASE_OUT } from "@/lib/motion";
import { home } from "@/content";

function Hero() {
  const { hero } = home;
  const reduce = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);

  // Part 3 of the load-in: glow pulses in then out once (after content settles).
  useEffect(() => {
    if (reduce || !glowRef.current) return;
    const tween = gsap.fromTo(
      glowRef.current,
      { opacity: 0 },
      { opacity: 0.15, duration: 0.2, delay: 0.3, ease: "sine.inOut", yoyo: true, repeat: 1 },
    );
    return () => {
      tween.kill();
    };
  }, [reduce]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  };

  return (
    <Section reveal={false} ambient className="!pt-16 tablet:!pt-24">
      <div className="relative grid items-center gap-10 tablet:grid-cols-2">
        <div ref={glowRef} className="hero-glow" aria-hidden />
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-3 text-small font-medium uppercase tracking-[0.2em] text-botanical"
          >
            One People Beauty
          </motion.p>
          <motion.h1 variants={item} className="max-w-xl">
            {hero.h1}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-md text-lg text-charcoal/75">
            {hero.subtext}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button to={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button to={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <div className="mx-auto w-full max-w-[460px]">
          <ImageFrame src={hero.image} alt="Healthy, beautiful textured hair" ratio="aspect-[4/5]" />
        </div>
      </div>
    </Section>
  );
}

function MissionPreview() {
  const { mission } = home;
  return (
    <Section bg="white">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={mission.heading} align="center" />
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">{mission.body}</p>
      </div>
    </Section>
  );
}

function WhoWeServe() {
  return (
    <Section bg="white" reveal={false}>
      <SectionHeading
        eyebrow="Who We Serve"
        title="Care made for your texture"
        align="center"
        className="mx-auto"
      />
      <Stagger className="mt-12 grid gap-6 tablet:grid-cols-3">
        {home.whoWeServe.map((p) => (
          <StaggerItem key={p.title}>
            <Card interactive className="h-full overflow-hidden p-0">
              <ImageFrame src={p.image} alt={p.title} ratio="aspect-[4/3]" rounded={false} />
              <div className="p-6 text-center">
                <div className="mx-auto -mt-12 mb-3 flex h-12 w-12 items-center justify-center rounded-pill bg-white text-botanical shadow-card">
                  <Icon name={p.icon} size={24} />
                </div>
                <h3 className="text-h3">{p.title}</h3>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-10 text-center">
        <Button to="/personas" variant="secondary">
          Meet our community
        </Button>
      </div>
    </Section>
  );
}

function WhatWeStandFor() {
  return (
    <Section>
      <SectionHeading title="What We Stand For" align="center" className="mx-auto" />
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {home.values.map((v) => (
          <div
            key={v.label}
            className="flex items-center gap-2 rounded-pill bg-white px-5 py-3 shadow-card"
          >
            <Icon name={v.icon} size={20} className="text-botanical" />
            <span className="font-medium">{v.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <MissionPreview />
      <WhatWeStandFor />
      <WhoWeServe />
    </>
  );
}
