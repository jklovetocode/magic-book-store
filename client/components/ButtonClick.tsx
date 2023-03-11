type ButtonProps = {
  children?: React.ReactNode
  style?: string
}
export default function ButtonClick({ children, style }: ButtonProps) {
  return (
    <button
      className={`px-2 py-1 border border-primary min-w-max rounded-lg bg-cyan-900 hover:bg-cyan-900/80 focus:bg-cyan-900/50 ${style}`}
    >
      {children}
    </button>
  )
}
