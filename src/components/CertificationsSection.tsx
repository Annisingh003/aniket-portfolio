import { motion, MotionStyle } from 'framer-motion';
import { CSSProperties } from 'react';
import portfolioData from '../data/portfolioData';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  accentColor: string;
}

const certifications: Certification[] = portfolioData.achievements.map((ach, idx) => {
  const colors = ['#818cf8', '#22d3ee', '#fb923c', '#a78bfa', '#34d399', '#f472b6'];
  return {
    title: ach,
    issuer: '',
    date: '',
    skills: [],
    accentColor: colors[idx % colors.length],
  };
});

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
    maxWidth: '1200px',
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
    gap: '24px',
    justifyItems: 'center',
    alignItems: 'start',
  },
  cardBase: {
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid',
    backdropFilter: 'blur(12px)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s, transform 0.3s',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  medalIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '24px',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#ffffff',
    margin: 0,
    lineHeight: 1.3,
  },
  issuer: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)',
    margin: 0,
  },
  date: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.5)',
    margin: 0,
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px',
  },
  skillTag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: 500,
    border: '1px solid',
    cursor: 'default',
    userSelect: 'none',
    transition: 'all 0.25s ease',
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
  },
};

/* ─── Certification Card Component ─── */
function CertificationCard({ cert, idx }: { cert: Certification; idx: number }) {
  const glowColor = cert.accentColor + '33';
  const borderColor = cert.accentColor + '44';
  const bgColor = cert.accentColor + '11';
  const skillBg = cert.accentColor + '22';
  const skillBorder = cert.accentColor + '55';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{
        ...S.cardBase,
        background: bgColor,
        borderColor: borderColor,
      } as MotionStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = cert.accentColor;
        el.style.boxShadow = `0 0 36px ${glowColor}, inset 0 0 24px ${glowColor}`;
        el.style.background = cert.accentColor + '18';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = borderColor;
        el.style.boxShadow = 'none';
        el.style.background = bgColor;
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${cert.accentColor}, transparent)`,
          opacity: 0.6,
        }}
      />

      {/* Header with medal icon */}
      <div style={S.header}>
        <div
          style={{
            ...S.medalIcon,
            background: `linear-gradient(135deg, ${cert.accentColor}, ${cert.accentColor}dd)`,
            boxShadow: `0 4px 16px ${glowColor}`,
          }}
        >
          🏆
        </div>
        <div style={S.content}>
          <h3 style={S.title}>{cert.title}</h3>
          <p style={S.issuer}>{cert.issuer}</p>
          <p style={S.date}>{cert.date}</p>
        </div>
      </div>

      {/* Skills tags */}
      <div style={S.skillsContainer}>
        {cert.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.08, y: -2 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            style={{
              ...S.skillTag,
              background: skillBg,
              borderColor: skillBorder,
              color: 'rgba(255,255,255,0.8)',
            } as MotionStyle}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = cert.accentColor;
              el.style.background = cert.accentColor + '33';
              el.style.color = '#ffffff';
              el.style.boxShadow = `0 4px 12px ${glowColor}`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = skillBorder;
              el.style.background = skillBg;
              el.style.color = 'rgba(255,255,255,0.8)';
              el.style.boxShadow = 'none';
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main export ─── */
export default function CertificationsSection() {
  return (
    <section id="certifications" style={S.section}>

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
            Key <span style={S.h2Span}>Achievements</span>
          </h2>
          <p style={S.subtitle}>Milestones & Recognition</p>
        </motion.div>

        {/* Grid */}
        <div style={S.grid}>
          {certifications.map((cert, idx) => (
            <CertificationCard key={cert.title} cert={cert} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
