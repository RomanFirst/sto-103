const sizes = {
  small: 'h-5 w-5',
  base: 'h-8 w-8',
  xl: 'h-12 w-12',
}

const colors = {
  white: 'text-white',
  blue: 'text-blue-800',
}

interface SpinnerProps {
  color?: keyof typeof colors
  size?: keyof typeof sizes
}

const Spinner = ({ color = 'white', size = 'base' }: SpinnerProps) => (
  <svg
    className={`Ipointer-events-none animate-spin ${sizes[size]} ${colors[color]}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-label="loading..."
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.93813-2.647z"
    />
  </svg>
)

export default Spinner
