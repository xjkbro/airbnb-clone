import { urlFor } from "../sanity";

const Review = ({ review }) => {
    console.log(review);
    return (
        <div className="review-box">
            <h1>{review.rating}</h1>
            <h2>{review.traveler.name}</h2>
            <img
                src={urlFor(review.traveler.image)
                    .width(50)
                    .height(50)
                    .crop("focalpoint")
                    .auto("format")}
            />
            <p>{review.reviewDescription}</p>
        </div>
    );
};

export default Review;
