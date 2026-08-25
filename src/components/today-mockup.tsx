import { MaterialIcon } from './material-icon';

/*
 * Màn hình "Hôm nay" của Amor AI dùng làm ảnh minh hoạ trong hero.
 * Bảng màu ở đây là Paper cố định (màn hình điện thoại), không đổi theo theme site.
 */

const INK = '#4A1530';
const INK2 = '#6B4050';
const LOVE = '#FF4D79';

const MOODS = ['🥰', '😊', '😌', '🥺', '😪', '😢'];
const SELECTED_MOOD = 2;
const RHYTHM = [true, true, false, true, true, true];

const cardShadow =
  '0 2px 8px rgba(74,21,48,0.07), 0 8px 24px rgba(74,21,48,0.06)';

function Avatar({ letter, background, offset }: { letter: string; background: string; offset?: boolean }) {
  return (
    <div
      style={{
        background: '#FFF8F3',
        borderRadius: 999,
        padding: 3,
        marginLeft: offset ? -11 : 0,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 999,
          background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 15,
          fontWeight: 600,
          color: INK,
        }}
      >
        {letter}
      </div>
    </div>
  );
}

function Chevron() {
  return <MaterialIcon name="chevron_right" size={20} opsz={20} color={LOVE} />;
}

export function TodayMockup() {
  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        background: '#FFF8F3',
        fontFamily: 'var(--font-be-vietnam-pro), system-ui, sans-serif',
      }}
    >
      <div
        style={{
          padding: '14px 20px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 15,
        }}
      >
        {/* Hai người */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            minHeight: 48,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar letter="A" background="#FF9E7A" />
            <Avatar letter="M" background="#FFD76A" offset />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 15,
                lineHeight: '21px',
                fontWeight: 600,
                color: INK,
              }}
            >
              An &amp; Minh
            </div>
            <div
              style={{
                fontSize: 11,
                lineHeight: '15px',
                fontWeight: 500,
                color: INK2,
              }}
            >
              Thứ Ba, 25 tháng 8
            </div>
          </div>
          <Chevron />
        </div>

        {/* Đếm ngày bên nhau */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            minHeight: 48,
          }}
        >
          <span
            style={{
              fontSize: 56,
              lineHeight: '56px',
              fontWeight: 600,
              letterSpacing: '-0.045em',
              color: INK,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            1.024
          </span>
          <span
            style={{
              fontSize: 15,
              lineHeight: '21px',
              fontWeight: 600,
              color: INK2,
            }}
          >
            ngày bên nhau
          </span>
          <Chevron />
        </div>

        {/* Giấy nhớ tự nhắn */}
        <div style={{ padding: '8px 2px 2px' }}>
          <div style={{ position: 'relative', transform: 'rotate(-2.2deg)' }}>
            <div
              style={{
                background: '#FFF6E2',
                borderRadius: 4,
                boxShadow:
                  '0 2px 8px rgba(74,21,48,0.10), 0 6px 20px rgba(74,21,48,0.08)',
                padding: '15px 16px 11px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  lineHeight: '24px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: INK,
                }}
              >
                Tối nay mình nấu món em thích nhé.
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <MaterialIcon
                  name="edit"
                  size={17}
                  opsz={20}
                  color="#B3204C"
                />
              </div>
            </div>
            {/* Băng keo washi */}
            <div
              style={{
                position: 'absolute',
                top: -8,
                left: '50%',
                width: 52,
                height: 17,
                marginLeft: -26,
                transform: 'rotate(3deg)',
                borderRadius: 1,
                background:
                  'repeating-linear-gradient(45deg, rgba(255,158,122,0.55) 0 4.5px, rgba(255,215,106,0.32) 4.5px 9px)',
              }}
            />
          </div>
        </div>

        {/* Tâm trạng hôm nay */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 20,
            boxShadow: cardShadow,
            padding: '8px 11px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 10,
              lineHeight: '15px',
              fontWeight: 500,
              letterSpacing: '0.16em',
              color: INK2,
            }}
          >
            HÔM NAY TRONG LÒNG BẠN · BÌNH YÊN
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {MOODS.map((mood, index) => {
              const active = index === SELECTED_MOOD;
              return (
                <div
                  key={mood}
                  style={{
                    flex: 1,
                    height: 48,
                    borderRadius: 15,
                    background: active ? '#FFE5EB' : 'rgba(255,246,248,0.7)',
                    transform: active ? 'translateY(-2px)' : undefined,
                    boxShadow: active
                      ? '0 2px 10px rgba(255,77,121,0.30)'
                      : undefined,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 23,
                  }}
                >
                  {mood}
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {RHYTHM.map((filled, index) => (
                <span
                  key={index}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: filled ? '#FFC4D1' : 'rgba(74,21,48,0.13)',
                  }}
                />
              ))}
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  background: '#FFE0E8',
                  boxShadow: 'inset 0 0 0 2px rgba(255,77,121,0.28)',
                }}
              />
            </div>
            <span
              style={{
                fontSize: 11,
                lineHeight: '15px',
                fontWeight: 500,
                color: INK2,
              }}
            >
              5 trong 7 ngày gần đây
            </span>
          </div>
        </div>

        {/* Câu hỏi hôm nay */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: '#FFFFFF',
            borderRadius: 20,
            boxShadow: cardShadow,
            padding: '15px 16px 14px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 76,
              height: 85,
              background:
                'repeating-linear-gradient(to bottom, transparent 0 27px, rgba(74,21,48,0.07) 27px 28px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  lineHeight: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  color: INK2,
                }}
              >
                CÂU HỎI HÔM NAY
              </span>
              <span
                style={{
                  transform: 'rotate(-2deg)',
                  background: '#FFF0F3',
                  borderRadius: 8,
                  padding: '4px 9px',
                  fontSize: 11,
                  lineHeight: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: '#B3204C',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                25.08
              </span>
            </div>
            <div
              style={{
                fontSize: 19,
                lineHeight: '28px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: INK,
                minHeight: 56,
              }}
            >
              Điều nhỏ nào hôm nay bạn muốn giữ lại lâu hơn?
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  flex: 1,
                  minHeight: 48,
                  borderRadius: 999,
                  background: LOVE,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '0 20px',
                }}
              >
                <MaterialIcon
                  name="history_edu"
                  size={18}
                  opsz={20}
                  color="#FFFFFF"
                />
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: '21px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  Viết cho hôm nay
                </span>
              </div>
              <div
                style={{
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: '#FFF6F8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MaterialIcon
                    name="refresh"
                    size={15}
                    opsz={20}
                    color="#A26E80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thanh điều hướng dưới cùng */}
      <div
        style={{
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 12,
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(14px)',
          borderRadius: 999,
          boxShadow: '0 4px 18px rgba(74,21,48,0.12)',
          display: 'flex',
          padding: '8px 10px',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <div
            style={{
              width: 56,
              height: 32,
              borderRadius: 999,
              background: '#FFB5C6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MaterialIcon name="favorite" size={22} fill={1} color={LOVE} />
          </div>
          <span style={{ fontSize: 11, fontWeight: 500, color: INK }}>
            Hôm nay
          </span>
        </div>
        {[
          { icon: 'auto_stories', label: 'Câu chuyện' },
          { icon: 'people_alt', label: 'Chúng mình' },
        ].map((tab) => (
          <div
            key={tab.icon}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <div
              style={{
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MaterialIcon
                name={tab.icon}
                size={22}
                weight={400}
                color="rgba(74,21,48,0.66)"
              />
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: 'rgba(74,21,48,0.72)',
              }}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
