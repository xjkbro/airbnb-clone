import Head from "next/head";
import Image from "next/image";
import { sanityClient } from "../sanity";

const Home = ({ properties }) => {
    console.log(properties);
    return <div>hello</div>;
};

export const getServerSideProps = async () => {
    const query = '*[ _type == "property"]';
    const properties = await sanityClient.fetch(query);

    if (!properties.length) {
        return {
            props: {
                properties: [],
            },
        };
    } else {
        return {
            props: {
                properties,
            },
        };
    }
};
export default Home;
