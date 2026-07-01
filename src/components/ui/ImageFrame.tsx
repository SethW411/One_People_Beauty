import { useState } from "react";
import { cn } from "@/lib/cn";

interface ImageFrameProps {
  src?: string;
  alt: string;
  className?: string;
  /** Tailwind aspect ratio class, e.g. "aspect-square", "aspect-[4/5]". */
  ratio?: string;
  rounded?: boolean;
}

/**
 * Image with a branded gradient placeholder. Until real photography is dropped
 * into public/images by the editor app, missing/loading images show a soft
 * cocoa→honey gradient instead of a broken-image icon.
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
        "relative overflow-hidden bg-gradient-to-br from-cocoa/15 via-sand to-honey/20",
        ratio,
        rounded && "rounded-card",
        className,
      )}
    >
      {showImg && (
        <img
          src={src}
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
