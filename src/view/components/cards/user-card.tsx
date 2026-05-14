
type UserCardParametters = {
  size: number
  imageSrc: string
  onTap: () => void
};

function UserCard({
  size,
  imageSrc,
  onTap
}: UserCardParametters) {

  return (
    <div className='flex shadow-sm rounded-full items-center justify-center' style={{width: `${size}px`, height: `${size}px`}}>
        <img className="w-full h-full object-cover" src={imageSrc} onClick={() => onTap()} />
    </div>
  )
}

export default UserCard
