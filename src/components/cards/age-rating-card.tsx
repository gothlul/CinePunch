import type { AgeRating } from '../../models/age-rating-model';

type AgeRatingParametters = {
  rating: AgeRating
}

function AgeRatingCard({ rating }: AgeRatingParametters) {
  return (
    <div className='inline-flex py-0.2 px-1 rounded-sm text-white font-semibold' style={{ backgroundColor: rating.color, border: "4px solid rgba(0,0,0, 0.25)" }}>
        <p className="text-semibold">{rating.age}</p>
    </div>
  )
}

export default AgeRatingCard
