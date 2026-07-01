import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { routes } from "@/routes";
import { global } from "@/content";

const primaryLinks = routes.filter((r) => r.inNav);

/**
 * Site footer. Houses the brand blurb, primary nav, the secondary links
 * (Who We Serve, Founder) and the Market Opportunity link — kept out of the
 * main nav to reduce cognitive load, per the design spec.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const { footer, socials, brandName, tagline } = global;

  return (
    <footer className="bg-charcoal text-cream/80">
      <Container className="grid gap-10 py-section-mobile tablet:grid-cols-4 tablet:py-section-desktop">
        {/* Brand */}
        <div className="tablet:col-span-2">
          <p className="font-heading text-xl text-cream">{brandName}</p>
          <p className="text-small text-cream/60">{tagline}</p>
          <p className="mt-3 max-w-sm text-small leading-relaxed">{footer.blurb}</p>
          {socials.length > 0 && (
            <div className="mt-5 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.platform}
                  className="text-cream/70 transition-colors hover:text-honey"
                >
                  <Icon name={s.platform} size={22} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Explore */}
        <div>
          <p className="mb-3 text-small font-semibold uppercase tracking-widest text-cream/60">
            Explore
          </p>
          <ul className="space-y-2 text-small">
            {primaryLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-honey">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More */}
        <div>
          <p className="mb-3 text-small font-semibold uppercase tracking-widest text-cream/60">
            More
          </p>
          <ul className="space-y-2 text-small">
            {footer.secondaryLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-honey">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={footer.marketLink.path}
                className="transition-colors hover:text-honey"
              >
                {footer.marketLink.label}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-3 py-5 text-small text-cream/50 tablet:flex-row tablet:items-center tablet:justify-between">
          <p>
            © {year} One People Beauty. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {footer.legalLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="transition-colors hover:text-honey">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
