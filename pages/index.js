import Navbar from "../__components/Navbar";
import Welcom from "../__components/welcom";
export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (<>
            <Navbar />
            <Welcom />
  </> );
}

export const getStaticProps = async () => { 

  return {
    props: {
      posts: [],
    } 
  };
};
