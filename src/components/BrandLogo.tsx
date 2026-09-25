import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'footer' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark' || variant === 'footer' || variant === 'white';

  // Responsive scale dimensions specifically calibrated to ensure ample breathing room
  // on top and bottom of the navbar and footer sections so it never touches the ends
  const dimensions = {
    sm: {
      markWidth: 54,
      markHeight: 38,
      theSize: 'text-[9.5px]',
      mainSize: 'text-[13.5px] sm:text-[14.5px]',
      taglineSize: 'text-[7.5px] sm:text-[8px]',
      gap: 'gap-2.5',
      lh: 'leading-[1.04]',
      taglineTracking: 'tracking-[0.14em]',
      taglineMt: 'mt-0.5',
    },
    md: {
      // Default navbar size: ~46px total height, perfectly fitting inside 90-110px navbar with >25px padding above & below
      markWidth: 66,
      markHeight: 46,
      theSize: 'text-[11px] sm:text-[11.5px]',
      mainSize: 'text-[16px] sm:text-[18px]',
      taglineSize: 'text-[8.5px] sm:text-[9.5px]',
      gap: 'gap-3',
      lh: 'leading-[1.03]',
      taglineTracking: 'tracking-[0.15em]',
      taglineMt: 'mt-0.5',
    },
    lg: {
      markWidth: 84,
      markHeight: 58,
      theSize: 'text-[13px] sm:text-[14px]',
      mainSize: 'text-[20px] sm:text-[23px]',
      taglineSize: 'text-[10.5px] sm:text-[11.5px]',
      gap: 'gap-3.5 sm:gap-4',
      lh: 'leading-[1.03]',
      taglineTracking: 'tracking-[0.15em]',
      taglineMt: 'mt-1',
    },
    xl: {
      markWidth: 106,
      markHeight: 74,
      theSize: 'text-[16px] sm:text-[17px]',
      mainSize: 'text-[25px] sm:text-[28px]',
      taglineSize: 'text-[13px] sm:text-[14px]',
      gap: 'gap-4 sm:gap-5',
      lh: 'leading-[1.02]',
      taglineTracking: 'tracking-[0.16em]',
      taglineMt: 'mt-1',
    },
  }[size];

  // Official brand colors from reference image:
  // Primary Serif Wordmark: #0B3B70 (Deep rich navy blue)
  // Accent Tagline: #F04E23 (Vibrant warm red-orange)
  // Outlines: #0088CC (Sky blue cottages) & #F26522 (Center orange cottage)
  const textColor = isDark ? '#FFFFFF' : '#0B3B70';
  const taglineColor = isDark ? '#FB923C' : '#F04E23';

  return (
    <div
      className={`inline-flex items-center ${dimensions.gap} select-none transition-transform hover:opacity-95 ${className}`}
      title="The Travel Agent Next Door - We Cover The World"
    >
      {/* Exact Graphic Mark: 3 Cottages (Blue, Orange, Blue) + Sun + Palm Tree */}
      <div className="shrink-0 flex items-center justify-center">
        <svg
          width={dimensions.markWidth}
          height={dimensions.markHeight}
          viewBox="0 0 115 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible drop-shadow-xs"
          aria-hidden="true"
        >
          {/* ================= 1. SUN (Top-Left behind Left Cottage) ================= */}
          <g id="ttand-sun">
            {/* 8 Radiating Pointed Rays */}
            <polygon points="21,11 21,3 23,11" fill="#FFB800" />
            <polygon points="26,12 32,7 28,14" fill="#FFB800" />
            <polygon points="28,18 36,19 28,20" fill="#FFB800" />
            <polygon points="26,24 32,29 25,26" fill="#FFB800" />
            <polygon points="22,26 21,34 20,26" fill="#FFB800" />
            <polygon points="16,25 10,29 14,22" fill="#FFB800" />
            <polygon points="14,19 6,18 14,17" fill="#FFB800" />
            <polygon points="16,13 10,8 18,12" fill="#FFB800" />

            {/* Sun Disc */}
            <circle cx="21" cy="18" r="8" fill="#FFB800" />
            {/* Orange Crescent Shadow on the Right Half */}
            <path
              d="M 21 10 A 8 8 0 0 1 29 18 A 8 8 0 0 1 21 26 A 5.8 5.8 0 0 0 21 10 Z"
              fill="#F57C00"
            />
            {/* White Crescent Highlight on the Left Edge */}
            <path
              d="M 21 11 A 7 7 0 0 0 14 18 A 7 7 0 0 0 21 25 A 7.8 7.8 0 0 1 17 18 A 7.8 7.8 0 0 1 21 11 Z"
              fill="#FFFFFF"
              opacity="0.95"
            />
          </g>

          {/* ================= 2. PALM TREE (Behind Center and Right Cottage) ================= */}
          <g id="ttand-palm">
            {/* Curved Trunk */}
            <path
              d="M 68 38 Q 72 24 76 16"
              stroke="#795548"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Vibrant Green Palm Fronds */}
            <path d="M 76 16 Q 64 9 55 12 Q 65 16 76 16 Z" fill="#4CAF50" />
            <path d="M 76 16 Q 71 5 78 6 Q 78 12 76 16 Z" fill="#7CB342" />
            <path d="M 76 16 Q 84 5 91 10 Q 84 14 76 16 Z" fill="#43A047" />
            <path d="M 76 16 Q 92 13 97 19 Q 88 21 76 16 Z" fill="#388E3C" />
            <path d="M 76 16 Q 88 21 92 28 Q 83 25 76 16 Z" fill="#66BB6A" />
          </g>

          {/* ================= 3. LEFT COTTAGE (Blue Outline, Tilted Left) ================= */}
          <g id="ttand-left-cottage">
            {/* Chimney on left roof slope */}
            <polygon
              points="6,34 6,26 10,26 10,37"
              fill="#FFFFFF"
              stroke="#0088CC"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            {/* House Body (White Fill with Blue Outline) */}
            <polygon
              points="4,43 11,76 31,73 27,42"
              fill="#FFFFFF"
              stroke="#0088CC"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            {/* Roof Overhang Eaves */}
            <polygon
              points="18,25 0,43 36,41"
              fill="#FFFFFF"
              stroke="#0088CC"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            {/* 4-Pane Attic Window */}
            <g transform="rotate(-11 19 50)">
              <rect
                x="14.5"
                y="45.5"
                width="9"
                height="9"
                fill="#FFFFFF"
                stroke="#0088CC"
                strokeWidth="1.6"
              />
              <line x1="19" y1="45.5" x2="19" y2="54.5" stroke="#0088CC" strokeWidth="1.2" />
              <line x1="14.5" y1="50" x2="23.5" y2="50" stroke="#0088CC" strokeWidth="1.2" />
            </g>
          </g>

          {/* ================= 4. RIGHT COTTAGE (Blue Outline, Tilted Right) ================= */}
          <g id="ttand-right-cottage">
            {/* Chimney on left slope of roof */}
            <polygon
              points="82,34 82,26 86,26 86,36"
              fill="#FFFFFF"
              stroke="#0088CC"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            {/* House Body (White Fill with Blue Outline) */}
            <polygon
              points="81,42 84,73 104,76 110,43"
              fill="#FFFFFF"
              stroke="#0088CC"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            {/* Roof Overhang Eaves */}
            <polygon
              points="96,25 78,41 114,43"
              fill="#FFFFFF"
              stroke="#0088CC"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            {/* 4-Pane Attic Window */}
            <g transform="rotate(11 96 50)">
              <rect
                x="91.5"
                y="45.5"
                width="9"
                height="9"
                fill="#FFFFFF"
                stroke="#0088CC"
                strokeWidth="1.6"
              />
              <line x1="96" y1="45.5" x2="96" y2="54.5" stroke="#0088CC" strokeWidth="1.2" />
              <line x1="91.5" y1="50" x2="100.5" y2="50" stroke="#0088CC" strokeWidth="1.2" />
            </g>
          </g>

          {/* ================= 5. CENTER COTTAGE (Orange Outline, Upright in Foreground) ================= */}
          <g id="ttand-center-cottage">
            {/* Chimney on left slope */}
            <polygon
              points="40,24 40,15 45,15 45,27"
              fill="#FFFFFF"
              stroke="#F26522"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            {/* House Body */}
            <polygon
              points="35,35 37,79 73,79 75,35"
              fill="#FFFFFF"
              stroke="#F26522"
              strokeWidth="3.4"
              strokeLinejoin="round"
            />
            {/* Roof Overhang */}
            <polygon
              points="55,11 31,35 79,35"
              fill="#FFFFFF"
              stroke="#F26522"
              strokeWidth="3.4"
              strokeLinejoin="round"
            />
            {/* 4-Pane Attic Window */}
            <rect
              x="49"
              y="24.5"
              width="12"
              height="11.5"
              fill="#FFFFFF"
              stroke="#F26522"
              strokeWidth="1.8"
            />
            <line x1="55" y1="24.5" x2="55" y2="36" stroke="#F26522" strokeWidth="1.2" />
            <line x1="49" y1="30.25" x2="61" y2="30.25" stroke="#F26522" strokeWidth="1.2" />

            {/* Welcoming Open Doorway */}
            <rect
              x="46"
              y="49"
              width="19"
              height="29"
              fill="#FFFFFF"
              stroke="#F26522"
              strokeWidth="2.4"
            />
            {/* Open Door in Perspective */}
            <polygon
              points="47,51 60,45 60,74 47,78"
              fill="#F26522"
              stroke="#D84E00"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Round Door Knob */}
            <circle cx="56.5" cy="62" r="1.6" fill="#FDBA74" stroke="#F26522" strokeWidth="0.8" />
          </g>
        </svg>
      </div>

      {/* Official Typography Wordmark (Serif + Bold Condensed Tagline) */}
      <div className={`flex flex-col text-left justify-center ${dimensions.lh}`}>
        {/* "The" (Classic Serif, positioned above Travel) */}
        <span
          className={`font-normal transition-colors ${dimensions.theSize}`}
          style={{
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            color: textColor,
            marginBottom: '-0.5px',
          }}
        >
          The
        </span>

        {/* "Travel Agent" (Classic Serif, Title Case) */}
        <span
          className={`font-bold tracking-tight transition-colors ${dimensions.mainSize}`}
          style={{
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            letterSpacing: '-0.02em',
            color: textColor,
          }}
        >
          Travel Agent
        </span>

        {/* "Next Door" (Classic Serif, Title Case) */}
        <span
          className={`font-bold tracking-tight transition-colors ${dimensions.mainSize}`}
          style={{
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            letterSpacing: '-0.02em',
            color: textColor,
          }}
        >
          Next Door
        </span>

        {/* "WE COVER THE WORLD" Tagline (Tall Condensed Bold Sans-Serif) */}
        <span
          className={`font-extrabold uppercase transition-colors ${dimensions.taglineMt} ${dimensions.taglineSize} ${dimensions.taglineTracking}`}
          style={{
            fontFamily: "'Barlow Condensed', 'Oswald', 'Arial Narrow', sans-serif",
            color: taglineColor,
          }}
        >
          WE COVER THE WORLD
        </span>
      </div>
    </div>
  );
};
