interface TextFieldProps {
  label?: string
  placeholder?: string
  style?: string
}
const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <div className='flex flex-col'>
      <label>{props.label}</label>
      <input className={`rounded-md p-1 px-1.25 ${props.style}`} />
    </div>
  )
}

export default TextField
