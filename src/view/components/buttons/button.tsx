
type ButtonParametters = {
  text: string
  onTap: () => void
};

function Button({
  text,
  onTap
}: ButtonParametters) {

  return (
    <button className='flex shadow-sm p-1.5 pb-1.75 rounded-sm items-center bg-white focus:outline-hidden' onClick={() => onTap()}>
        <p className='p-0 ms-0.5 flex-1'>{text.toUpperCase()}</p>
    </button>
  )
}

export default Button
