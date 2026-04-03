import { motion, MotionStyle } from 'framer-motion';
import { CSSProperties } from 'react';
import portfolioData from '../data/portfolioData';

interface Skill { name: string; category: string; }

const skills: Skill[] = [
  ...portfolioData.skills.languages.map(s => ({ name: s, category: 'Programming & CS Fundamentals' })),
  ...portfolioData.skills.technologies.map(s => ({ name: s, category: 'Frameworks & Web Technologies' })),
  ...portfolioData.skills.tools.map(s => ({ name: s, category: 'Tools & Platforms' })),
  ...portfolioData.skills.platforms.map(s => ({ name: s, category: 'Tools & Platforms' })),
  ...portfolioData.skills.softSkills.map(s => ({ name: s, category: 'Soft Skills' })),
];

const categories = Array.from(new Set(skills.map((s) => s.category)));

interface CatMeta {
  accent: string;
  glow: string;
  dot: string;
  cardBorder: string;
  cardBg: string;
  badgeBg: string;
  badgeBorder: string;
}

const catMeta: Record<string, CatMeta> = {
  'Programming & CS Fundamentals': {
    accent: '#818cf8',
    glow: 'rgba(99,102,241,0.15)',
    dot: '#818cf8',
    cardBorder: 'rgba(99,102,241,0.25)',
    cardBg: 'rgba(99,102,241,0.06)',
    badgeBg: 'rgba(99,102,241,0.12)',
    badgeBorder: 'rgba(99,102,241,0.35)',
  },
  'Frameworks & Web Technologies': {
    accent: '#c084fc',
    glow: 'rgba(192,132,252,0.15)',
    dot: '#c084fc',
    cardBorder: 'rgba(192,132,252,0.25)',
    cardBg: 'rgba(192,132,252,0.06)',
    badgeBg: 'rgba(192,132,252,0.12)',
    badgeBorder: 'rgba(192,132,252,0.35)',
  },
  'Tools & Platforms': {
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
    dot: '#34d399',
    cardBorder: 'rgba(52,211,153,0.25)',
    cardBg: 'rgba(52,211,153,0.05)',
    badgeBg: 'rgba(52,211,153,0.10)',
    badgeBorder: 'rgba(52,211,153,0.30)',
  },
  'Soft Skills': {
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.15)',
    dot: '#fb923c',
    cardBorder: 'rgba(251,146,60,0.25)',
    cardBg: 'rgba(251,146,60,0.05)',
    badgeBg: 'rgba(251,146,60,0.10)',
    badgeBorder: 'rgba(251,146,60,0.30)',
  },
};

/* ─── Style objects ─── */
const S: Record<string, CSSProperties> = {
  section: {
    position: 'relative',
    width: '100%',
    padding: '100px 24px 80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'var(--backgroundColor, #0a0a12)',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  container: {
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  heading: {
    textAlign: 'center',
    marginBottom: '56px',
  },
  h2: {
    fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
    fontWeight: 500,
    margin: 0,
    letterSpacing: '-0.02em',
    background: 'linear-gradient(0deg, #0d9488, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  h2Span: {
    background: 'linear-gradient(135deg, #14b8a6, #5eead4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    marginTop: '10px',
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    fontFamily: "'Courier New', monospace",
  },
  grid: {
    width: '100%',
    maxWidth: '1000px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    justifyItems: 'center',
    alignItems: 'start',
  },
  cardBase: {
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid',
    backdropFilter: 'blur(12px)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
    boxSizing: 'border-box',
  },
  catHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '14px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  catTitle: {
    fontSize: '0.62rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontFamily: "'Courier New', monospace",
    margin: 0,
  },
  catLine: {
    flex: 1,
    height: '1px',
    opacity: 0.2,
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '0.68rem',
    fontWeight: 500,
    border: '1px solid',
    cursor: 'default',
    userSelect: 'none',
    transition: 'all 0.25s ease',
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
  },
};

/* ─── Badge with hover state ─── */
function SkillBadge({ name, meta }: { name: string; meta: CatMeta }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      style={{
        ...S.badge,
        background: meta.badgeBg,
        borderColor: meta.badgeBorder,
        color: 'rgba(255,255,255,0.72)',
      } as MotionStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = meta.accent;
        el.style.background = meta.badgeBg.replace(/[\d.]+\)$/, '0.22)');
        el.style.color = '#fff';
        el.style.boxShadow = `0 4px 16px ${meta.glow}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = meta.badgeBorder;
        el.style.background = meta.badgeBg;
        el.style.color = 'rgba(255,255,255,0.72)';
        el.style.boxShadow = 'none';
      }}
    >
      {name}
    </motion.span>
  );
}

/* ─── Category Card with hover state ─── */
function CategoryCard({ cat, idx }: { cat: string; idx: number }) {
  const meta = catMeta[cat];
  const catSkills = skills.filter((s) => s.category === cat);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      style={{
        ...S.cardBase,
        background: meta.cardBg,
        borderColor: meta.cardBorder,
      } as MotionStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = meta.accent.replace(')', ', 0.55)').replace('rgb', 'rgba');
        el.style.boxShadow = `0 0 36px ${meta.glow}, inset 0 0 24px ${meta.glow}`;
        el.style.background = meta.cardBg.replace(/[\d.]+\)$/, '0.10)');
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = meta.cardBorder;
        el.style.boxShadow = 'none';
        el.style.background = meta.cardBg;
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${meta.accent}, transparent)`,
          opacity: 0.6,
        }}
      />

      {/* Header */}
      <div style={S.catHeader}>
        <span
          style={{
            ...S.dot,
            background: meta.dot,
            boxShadow: `0 0 10px ${meta.dot}`,
          }}
        />
        <h3
          style={{
            ...S.catTitle,
            color: meta.accent,
            textShadow: `0 0 12px ${meta.accent}66`,
          }}
        >
          {cat}
        </h3>
        <div
          style={{
            ...S.catLine,
            background: `linear-gradient(to right, ${meta.accent}, transparent)`,
          }}
        />
      </div>

      {/* Badges */}
      <div style={S.badgeRow}>
        {catSkills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} meta={meta} />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main export ─── */
export default function SkillsSection() {
  return (
    <section id="skills" style={S.section}>

      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: -120, left: -160,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, #14b8a6, transparent 70%)',
        filter: 'blur(90px)', opacity: 0.1, pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: -90, right: -110,
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accentColor, #14b8a6), transparent 70%)',
        filter: 'blur(90px)', opacity: 0.1, pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={S.container}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={S.heading as MotionStyle}
        >
          <h2 style={S.h2}>
            My{' '}
            <span style={S.h2Span}>Skills</span>
          </h2>
          <p style={S.subtitle}>Technologies &amp; tools I work with</p>
        </motion.div>

        {/* Grid */}
        <div style={S.grid}>
          {categories.map((cat, idx) => (
            <CategoryCard key={cat} cat={cat} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
