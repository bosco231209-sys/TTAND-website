import React from 'react';

interface LogoProps {
  className?: string;
}

// 1. BedsOnline Logo (Matching screenshot: Navy Beds + Online with ®)
export const BedsOnlineLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 240 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="BedsOnline"
  >
    {/* "Beds" in bold deep blue */}
    <text
      x="10"
      y="36"
      fill="#005288"
      fontSize="36"
      fontWeight="800"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      letterSpacing="-0.02em"
    >
      Beds
    </text>
    {/* "Online" in regular weight deep blue */}
    <text
      x="96"
      y="36"
      fill="#005288"
      fontSize="36"
      fontWeight="400"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      letterSpacing="-0.01em"
    >
      Online
    </text>
    {/* Registered symbol ® */}
    <circle cx="212" cy="16" r="5" stroke="#005288" strokeWidth="1" fill="none" />
    <text
      x="212"
      y="18.5"
      fill="#005288"
      fontSize="6"
      fontWeight="700"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
    >
      R
    </text>
  </svg>
);

// 2. Air Canada Logo (Matching screenshot: Red roundel with maple leaf + bold AIR CANADA)
export const AirCanadaLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 250 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Air Canada"
  >
    {/* Air Canada Roundel: Red ring with stylized red Maple Leaf */}
    <g transform="translate(10, 5)">
      <circle cx="20" cy="20" r="18.5" stroke="#E31837" strokeWidth="2.5" fill="none" />
      {/* 11-point Canadian Maple Leaf */}
      <path
        d="M20 7.5 L21.5 12.5 L24.5 11 L23.5 15 L28 15.5 L26 19 L30 20.5 L26 24 L27.5 27 L23.5 26.5 L23 30.5 L20.5 28 L20.5 33 L19.5 33 L19.5 28 L17 30.5 L16.5 26.5 L12.5 27 L14 24 L10 20.5 L14 19 L12 15.5 L16.5 15 L15.5 11 L18.5 12.5 Z"
        fill="#E31837"
      />
    </g>
    {/* AIR CANADA wordmark in bold black sans-serif */}
    <text
      x="62"
      y="32"
      fill="#000000"
      fontSize="22"
      fontWeight="900"
      letterSpacing="0.14em"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    >
      AIR CANADA
    </text>
  </svg>
);

// 3. Royal Caribbean International Logo (Matching screenshot: Crown & Anchor + Royal Caribbean + Yellow bar with International)
export const RoyalCaribbeanLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 260 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Royal Caribbean International"
  >
    {/* Iconic Crown and Anchor emblem on left */}
    <g transform="translate(6, 6)">
      {/* Crown */}
      <polygon points="10,12 16,19 23,8 30,19 36,12 34,24 12,24" fill="#00246B" />
      {/* Anchor ring */}
      <circle cx="23" cy="23" r="3.5" fill="#FFFFFF" stroke="#00246B" strokeWidth="2.5" />
      {/* Vertical shaft */}
      <line x1="23" y1="24" x2="23" y2="40" stroke="#00246B" strokeWidth="3" />
      {/* Curved flukes */}
      <path
        d="M12 32 C12 40, 34 40, 34 32"
        stroke="#00246B"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Stock tips */}
      <polygon points="10,32 13,29 15,35" fill="#00246B" />
      <polygon points="36,32 33,29 31,35" fill="#00246B" />
    </g>

    {/* Text block */}
    <g transform="translate(56, 0)">
      {/* ROYAL CARIBBEAN in bold serif */}
      <text
        x="0"
        y="25"
        fill="#00246B"
        fontSize="17.5"
        fontWeight="800"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="0.04em"
      >
        ROYAL CARIBBEAN
      </text>
      
      {/* Yellow/Gold rectangular banner bar */}
      <rect x="0" y="32" width="186" height="15" fill="#FAB617" rx="1" />
      
      {/* INTERNATIONAL text inside yellow bar */}
      <text
        x="93"
        y="43.5"
        fill="#00246B"
        fontSize="9.5"
        fontWeight="800"
        textAnchor="middle"
        letterSpacing="0.22em"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        INTERNATIONAL
      </text>
    </g>
  </svg>
);

// 4. Avis Logo (Matching screenshot: Vibrant Red slanted AVIS®)
export const AvisLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 200 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Avis"
  >
    {/* AVIS in iconic italic bold red */}
    <text
      x="20"
      y="38"
      fill="#D40026"
      fontSize="44"
      fontWeight="900"
      fontStyle="italic"
      letterSpacing="-0.02em"
      fontFamily="system-ui, -apple-system, 'Arial Black', sans-serif"
    >
      AVIS
    </text>
    {/* Registered trademark ® */}
    <circle cx="152" cy="14" r="4.5" stroke="#D40026" strokeWidth="1" fill="none" />
    <text
      x="152"
      y="16.5"
      fill="#D40026"
      fontSize="5.5"
      fontWeight="700"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
    >
      R
    </text>
  </svg>
);

// 5. G Adventures Logo (Matching screenshot: Purple circle icon + bold italic G Adventures)
export const GAdventuresLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 240 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="G Adventures"
  >
    {/* Distinctive Purple Circle with G-traveler arrow */}
    <g transform="translate(6, 6)">
      <circle cx="19" cy="19" r="18" fill="#43135C" />
      {/* Spiral circular arrow mark */}
      <circle cx="24" cy="12" r="2.8" fill="#00BA9D" />
      <path
        d="M16 16 C20 15, 23 17, 25 21 L20 26 L14 22 Z"
        fill="#FFFFFF"
      />
      <path
        d="M18 26 L22 33 M22 21 L28 27"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M9 22 A 11 11 0 1 1 26 28"
        stroke="#00BA9D"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* G Adventures wordmark */}
    <text
      x="54"
      y="32"
      fill="#43135C"
      fontSize="24"
      fontWeight="900"
      fontStyle="italic"
      letterSpacing="-0.02em"
      fontFamily="system-ui, -apple-system, sans-serif"
    >
      G Adventures
    </text>
  </svg>
);

// 6. Abercrombie & Kent Logo (Matching screenshot: Elegant black serif Abercrombie & Kent)
export const AbercrombieKentLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 270 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Abercrombie & Kent"
  >
    <text
      x="135"
      y="32"
      fill="#1A1A1A"
      fontSize="22"
      fontWeight="700"
      textAnchor="middle"
      letterSpacing="0.03em"
      fontFamily="Baskerville, 'Playfair Display', Georgia, 'Times New Roman', serif"
    >
      Abercrombie &amp; Kent
    </text>
  </svg>
);

// 7. Hurtigruten Logo (Matching screenshot: Red circular H mark + bold HURTIGRUTEN)
export const HurtigrutenLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 250 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Hurtigruten"
  >
    {/* Red circular emblem with stylized white "H" */}
    <g transform="translate(8, 7)">
      <circle cx="18" cy="18" r="18" fill="#D31826" />
      {/* White H with wave/flag curve */}
      <path
        d="M11 9 L15 9 L15 15 L21 15 L21 9 L25 9 L25 27 L21 27 L21 19 L15 19 L15 27 L11 27 Z"
        fill="#FFFFFF"
      />
    </g>
    {/* HURTIGRUTEN wordmark */}
    <text
      x="54"
      y="32"
      fill="#0A0A0A"
      fontSize="21"
      fontWeight="900"
      letterSpacing="0.04em"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    >
      HURTIGRUTEN
    </text>
  </svg>
);

// 8. Railbookers Logo (Matching screenshot: Navy railbookers + 3 speed rails on the right)
export const RailbookersLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 250 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Railbookers"
  >
    {/* railbookers wordmark in lowercase navy */}
    <text
      x="10"
      y="33"
      fill="#0C254A"
      fontSize="27"
      fontWeight="800"
      letterSpacing="-0.03em"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    >
      railbookers
    </text>

    {/* 3 horizontal speed lines / tracks with right-pointing arrow tails */}
    <g transform="translate(196, 17)">
      {/* Line 1 */}
      <path d="M0 0 L20 0 L23 4 L0 4 Z" fill="#0C254A" />
      {/* Line 2 */}
      <path d="M0 7 L23 7 L26 11 L0 11 Z" fill="#0C254A" />
      {/* Line 3 */}
      <path d="M0 14 L20 14 L23 18 L0 18 Z" fill="#0C254A" />
    </g>
  </svg>
);
