import { urlFor } from "../sanity";
import Image from "next/image";

const ImageComp = ({ identifier, image }) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <Image src={urlFor(image)} alt="" />
        </div>
    );
};
export default ImageComp;
