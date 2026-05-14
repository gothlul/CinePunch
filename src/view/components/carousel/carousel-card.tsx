import type Media from "../../../core/models/media-model";
import AgeRatingCard from "../cards/age-rating-card";
import Button from "../buttons/button";

export type CarouselCardParametters = {
  item: Media
  onTap: () => void
};

function CarouselCard({
  item,
  onTap
}: CarouselCardParametters) {

  return (
    <div className="h-32 w-full bg-[url('/caminho/para/imagem.jpg')] bg-cover">
      <AgeRatingCard rating={item.ageRating}></AgeRatingCard>
      <div>
        <h2>{item.title}</h2>
        <div>
          <Button onTap={() => onTap()} text="ingressos"></Button>
          <div>
            {/* <IconButton></IconButton>
            <IconButton></IconButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard
