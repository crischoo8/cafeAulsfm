import JournalPostCard from "../../components/JournalPostCard/JournalPostCard";
import JournalHero from "./JournalHero";
import { swalBasicSettings, deletePostService  } from "../../utilities/posts-service";
import Swal from "sweetalert2";
import debug from "debug";

const log = debug("cafeaulsfm:src:pages:JournalPage");

export default function JournalPage({post}) {

    const handleDelete = async (postID, postItem) => {
        const prompt = await Swal.fire({
          ...swalBasicSettings("Proceed to delete?", "warning"),
          text: "Your favourite outfit containing this apparel will also be deleted.",
          showCancelButton: true,
          confirmButtonText: "DELETE",
          cancelButtonText: "CANCEL",
        });
    
        if (prompt.isConfirmed) {
          try {
            await deletePostService(postID, postItem);
            const remainingPost = post.filter(
              (item) => item._id !== postID
            );
            log("deleted apparel:", remainingPost);
            setApparel(remainingApparel);
            Swal.fire(swalBasicSettings("Deleted!", "success"));
          } catch (err) {
            console.error(err);
            Swal.fire({
              ...swalBasicSettings("Error", "error"),
              text: "Unable to delete. Please try again!",
            });
          }
        }
      };
    
    return (
        <>
        <h1>hello! your Journal is here!</h1> 
        {/* <JournalHero/>    */}
        {/* <JournalPostCard/> */}
        {post.map((postItem, index) => (
          <JournalPostCard
            key={postItem._id}
            index={index}
            postItem={postItem}
            handleDelete={handleDelete}
          />
        ))}
        </>
    );
}