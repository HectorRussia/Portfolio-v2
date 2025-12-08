const Logo = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo"
    >
      <polygon
        points="24,4 40,12 40,36 24,44 8,36 8,12"
        stroke="#58E6C9"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <a href="/">
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#58E6C9"
        fontSize="20"
        fontWeight="600"
        fontFamily="Inter, system-ui, -apple-system, 'Helvetica Neue', Arial"
      >
        H
      </text>
      </a>
    </svg>
  )
}

export default Logo