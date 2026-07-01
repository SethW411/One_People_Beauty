import { useState } from "react";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

interface ImageFrameProps {
  src?: string;
  alt: string;
  className?: string;
  /** Tailwind aspect ratio class, e.g. "aspect-square", "aspect-[4/5]". */
  ratio?: string;
  rounded?: boolean;
}

/**
 * Framed image: a thin gray outline (border-frame) over a matching gray
 * background (bg-frame). The background shows through any transparent area or
 * letterbox, so a cropped/loading image's background matches its outline.
 */
export default function ImageFrame({
  src,
  alt,
  className,
  ratio = "aspect-square",
  rounded = true,
}: ImageFrameProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImg = src && !failed;

  return (
    <div
      className={cn(
        // Thin gray outline + matching background (shows through any transparent
        // area or letterbox, so a cropped image's background matches its outline).
        "relative overflow-hidden border border-frame bg-frame",
        ratio,
        rounded && "rounded-card",
        className,
      )}
    >
      {showImg && (
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}
