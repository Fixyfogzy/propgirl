import './PlaceholderImage.css';

const MOTIFS = {
  facade: (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <rect x="30" y="60" width="140" height="120" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <line x1="30" y1="90" x2="170" y2="90" stroke="currentColor" strokeWidth="0.6" />
      <line x1="30" y1="120" x2="170" y2="120" stroke="currentColor" strokeWidth="0.6" />
      <line x1="30" y1="150" x2="170" y2="150" stroke="currentColor" strokeWidth="0.6" />
      <line x1="70" y1="60" x2="70" y2="180" stroke="currentColor" strokeWidth="0.6" />
      <line x1="110" y1="60" x2="110" y2="180" stroke="currentColor" strokeWidth="0.6" />
      <line x1="150" y1="60" x2="150" y2="180" stroke="currentColor" strokeWidth="0.6" />
      <polyline points="20,60 100,20 180,60" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  ),
  interior: (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <line x1="0" y1="130" x2="200" y2="130" stroke="currentColor" strokeWidth="0.6" />
      <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      <rect x="115" y="90" width="55" height="40" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <line x1="115" y1="110" x2="170" y2="110" stroke="currentColor" strokeWidth="0.4" />
      <rect x="30" y="150" width="45" height="24" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  ),
  portrait: (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <path d="M100 60 C120 60 132 78 132 100 C132 122 118 138 100 138 C82 138 68 122 68 100 C68 78 80 60 100 60 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M50 200 C50 165 72 148 100 148 C128 148 150 165 150 200" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  ),
};

/**
 * Stand-in for real photography. Once you have real photos, replace the
 * usage with a plain <img src="..." alt="..." /> of the same aspect ratio.
 */
export default function PlaceholderImage({ variant = 'facade', tone = 'dark', label, src, alt, className = '' }) {
  if (src) {
    return (
      <div className={`placeholder-img has-photo ${className}`}>
        <img src={src} alt={alt || label || ''} className="placeholder-img__photo" />
      </div>
    );
  }

  return (
    <div className={`placeholder-img tone-${tone} ${className}`} role="img" aria-label={label || 'Property photography placeholder'}>
      <div className="placeholder-img__motif">{MOTIFS[variant]}</div>
      {label && <span className="placeholder-img__label">{label}</span>}
    </div>
  );
}