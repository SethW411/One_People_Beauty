import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-heading text-h1 text-cocoa">404</p>
      <h1 className="mt-4">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-charcoal/70">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8 flex justify-center">
        <Button to="/">Back to Home</Button>
      </div>
    </Section>
  );
}
