import Image from "next/image";

type Props = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function BrandLogo({ className, size = 56, priority = false }: Props) {
  return (
    <Image
      src="/logo.jpg"
      alt="İklim Güvenç"
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  );
}
