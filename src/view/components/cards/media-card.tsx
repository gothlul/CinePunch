import type Media from "../../../core/models/media-model";

type UserCardParametters = {
  media: Media
  onTap: () => void
};

function MediaCard({
  media,
  onTap
}: UserCardParametters) {

  if (!media.poster) return null;

  return (
    <div
        className='shadow-sm rounded-md h-[350px] w-[200px] bg-cover bg-center overflow-hidden'
        style={{ backgroundImage: `url(${"https://image.tmdb.org/t/p/w200" + media.poster})` }}
        onClick={() => onTap()}
    >
        <div className="flex p-2 h-full w-full">
            <p className="text-white font-semibold">{media.title}</p>
        </div>
    </div>
  )
}

export default MediaCard
