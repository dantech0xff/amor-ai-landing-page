import type { CSSProperties } from 'react';

type MaterialIconProps = {
  name: string;
  size?: number;
  color?: string;
  fill?: 0 | 1;
  weight?: number;
  opsz?: number;
  className?: string;
  style?: CSSProperties;
};

/** Một ký tự Material Symbols Rounded với các trục biến thiên khớp bản thiết kế. */
export function MaterialIcon({
  name,
  size = 24,
  color,
  fill = 0,
  weight = 500,
  opsz = 24,
  className,
  style,
}: MaterialIconProps) {
  return (
    <span
      className={
        className
          ? `material-symbols-rounded ${className}`
          : 'material-symbols-rounded'
      }
      style={{
        fontSize: size,
        color,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'opsz' ${opsz}`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
