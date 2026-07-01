/**
 * Ambient hero background — a very subtle, slow-drifting set of flowing strands.
 *
 * This is the lightweight CSS/SVG stand-in for the "flowing hair" Lottie in the
 * motion plan (Layer 1: always-on, opacity < 0.12, slow, behind hero only).
 * To swap in a real Lottie later: replace the <svg> with
 *   <Lottie animationData={hairStrands} loop className="h-full w-full" />
 * and keep the wrapper's opacity/blur/blend classes below.
 *
 * Decorative only — pointer-events-none and aria-hidden.
 */
export default function HeroAmbient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.1] mix-blend-multiply blur-[6px]"
      aria-hidden
    >
      <svg
        className="ambient-drift absolute left-1/2 top-1/2 h-[140%] w-[160%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#5A3E36" strokeWidth="2" fill="none">
          <path d="M-100 200 C 200 120, 400 280, 700 200 S 1100 120, 1400 220" />
          <path d="M-100 320 C 220 240, 420 400, 720 320 S 1120 240, 1400 340" />
          <path d="M-100 440 C 200 360, 400 520, 700 440 S 1100 360, 1400 460" />
          <path d="M-100 560 C 220 480, 420 640, 720 560 S 1120 480, 1400 580" />
          <path d="M-100 680 C 200 600, 400 760, 700 680 S 1100 600, 1400 700" />
        </g>
      </svg>
    </div>
  );
}
