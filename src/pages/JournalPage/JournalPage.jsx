import JournalPostCard from "../../components/JournalPostCard/JournalPostCard";
import JournalHero from "./JournalHero";
import {
  swalBasicSettings,
  deletePostService,
} from "../../utilities/posts-service";
import Swal from "sweetalert2";
import debug from "debug";

const log = debug("cafeaulsfm:src:pages:JournalPage");

export default function JournalPage({ post, setPost }) {

  const handleDelete = async (postID) => {
    const prompt = await Swal.fire({
      ...swalBasicSettings("Proceed to delete?", "warning"),
      text: "Your journal post will be deleted.",
      showCancelButton: true,
      confirmButtonText: "DELETE",
      cancelButtonText: "CANCEL",
    });

    if (prompt.isConfirmed) {
      try {
        await deletePostService(postID);
        const remainingPost = post.filter((item) => item._id !== postID);
        log("deleted post:", remainingPost);
        setPost(remainingPost);
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
      {/* {JSON.stringify(post.length)} */}
      {/* conditional rendering based on length of posts */}
      {post.length ==0 && <JournalHero/>}

      {post.length !==0 && post.map((postItem, index) => (
        <JournalPostCard
          key={postItem._id}
          index={index}
          postItem={postItem}
          handleDelete={handleDelete}
          post={post}
          setPost={setPost}
        />
      ))}
    </>
  );
}
