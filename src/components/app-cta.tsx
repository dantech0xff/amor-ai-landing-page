import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

/** Dải kêu gọi tải app màu lovec, dùng ở trang blog và cuối mỗi bài viết. */
export function AppCta({
  title,
  body,
  action,
  iconSize = 48,
  padding = '24px 28px',
  radius = 20,
}: {
  title: string;
  body: string;
  action: string;
  iconSize?: number;
  padding?: string;
  radius?: number;
}) {
  return (
    <div
      style={{
        background: 'var(--du-lovec)',
        borderRadius: radius,
        padding,
        display: 'flex',
        alignItems: 'center',
        gap: iconSize >= 52 ? 20 : 18,
        flexWrap: 'wrap',
      }}
    >
      <Image
        src={SITE.icon}
        alt="Duoly"
        width={iconSize}
        height={iconSize}
        style={{
          borderRadius: iconSize >= 52 ? 15 : 14,
          boxShadow: '0 6px 18px rgba(74,21,48,0.22)',
        }}
      />
      <div
        style={{
          flex: 1,
          minWidth: iconSize >= 52 ? 240 : 220,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          fontFamily: 'var(--font-be-vietnam-pro), system-ui, sans-serif',
        }}
      >
        <span
          style={{
            fontSize: iconSize >= 52 ? 17 : 16,
            fontWeight: 700,
            color: 'var(--du-onlovec)',
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 14,
            lineHeight: '22px',
            color: 'var(--du-onlovec)',
            opacity: 0.85,
          }}
        >
          {body}
        </span>
      </div>
      <Link
        href="/#download"
        style={{
          fontFamily: 'var(--font-be-vietnam-pro), system-ui, sans-serif',
          fontSize: 14,
          fontWeight: 600,
          color: '#FFF8F3',
          background: '#4A1530',
          borderRadius: 999,
          padding: iconSize >= 52 ? '12px 22px' : '11px 20px',
          textDecoration: 'none',
        }}
      >
        {action}
      </Link>
    </div>
  );
}
