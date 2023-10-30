import JournalPostCard from "../../components/JournalPostCard/JournalPostCard";
import JournalHero from "./JournalHero";
export default function JournalPage({post}) {
    return (
        <>
        <h1>hello! your Journal is here!</h1> 
        {/* <JournalHero/>    */}
        {JSON.stringify(post)}
        {/* <JournalPostCard/> */}
        {post.map((postItem, index) => (
          <JournalPostCard
            key={postItem._id}
            index={index}
            postItem={postItem}
          />
        ))}
        </>
    );
}