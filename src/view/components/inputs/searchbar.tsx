
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type SearchbarParametters = {
  icon: IconDefinition
  placeholder: string
  term: string
  onChange: (value: string) => void
};

function SearchBar({
  icon,
  placeholder,
  term,
  onChange
}: SearchbarParametters,) {

  return (
    <div className='flex shadow-sm p-1.5 pb-1.75 rounded-sm text-xs items-center flex-1 justify-between bg-white gap-2'>
        <input className='focus:outline-hidden p-0 ms-0.5 flex-1' type='text' placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={term} />
        <span className="flex" onClick={term.trim() != ""?() => onChange(""):() => {}}><FontAwesomeIcon icon={term.trim() == ""?icon:faXmark} /></span>
    </div>
  )
}

export default SearchBar
