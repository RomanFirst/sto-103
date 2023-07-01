import Spinner from './spiner'

const variants = {
  fullPage: `fixed inset-0 z-20`,
  base: `h-40`,
  dialog: `h-40 -mt-8`,
  absolute: `absolute h-96 w-full top-0 z-20`,
  absoluteList: `mx-auto top-1/2 fixed sticky z-20 h-0`,
}

const Loader = ({
  className,
  variant = 'base',
}: {
  className?: string
  variant?: keyof typeof variants
}) => {
  return (
    <div
      className={`flex items-center justify-center bg-transparent ${variants[variant]} ${className}`}
    >
      <Spinner />
    </div>
  )
}

export default Loader
