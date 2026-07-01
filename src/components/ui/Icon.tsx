import {
  Waves,
  Spiral,
  CirclesThree,
  Drop,
  ShieldCheck,
  Barbell,
  UsersThree,
  Heartbeat,
  Sparkle,
  Repeat,
  Leaf,
  List,
  X,
  CaretDown,
  CaretRight,
  ArrowRight,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  type IconProps,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";

/**
 * Maps the string `icon` names used in content JSON (and a few UI icons) to
 * Phosphor components. Keep this in sync with the names allowed by the editor app.
 */
const iconMap: Record<string, PhosphorIcon> = {
  Waves,
  Spiral,
  CirclesThree,
  Drop,
  ShieldCheck,
  Barbell,
  UsersThree,
  Heartbeat,
  Sparkle,
  Repeat,
  Leaf,
  List,
  X,
  CaretDown,
  CaretRight,
  ArrowRight,
  instagram: InstagramLogo,
  tiktok: TiktokLogo,
  youtube: YoutubeLogo,
};

interface Props extends IconProps {
  name: string;
}

export default function Icon({ name, ...props }: Props) {
  const Cmp = iconMap[name] ?? Sparkle;
  return <Cmp {...props} />;
}
