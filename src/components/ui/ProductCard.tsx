import Card from "./Card";
import Chip from "./Chip";
import type { ProductRef } from "@/content/schema";

interface Props {
  product: ProductRef;
}

/**
 * Text-only product card: name, supported textures, and a short benefit line.
 * (No imagery — the available photos aren't product-specific.)
 */
export default function ProductCard({ product }: Props) {
  return (
    <Card interactive className="flex h-full flex-col p-6">
      <h3 className="text-h3">{product.name}</h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.textures.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
      {product.keyBenefit && (
        <p className="mt-3 text-small text-charcoal/70">{product.keyBenefit}</p>
      )}
    </Card>
  );
}
