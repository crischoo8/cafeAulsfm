import JournalPostCard from "../../components/JournalPostCard/JournalPostCard";
import JournalHero from "./JournalHero";
import {
  swalBasicSettings,
  deletePostService,
} from "../../utilities/posts-service";
import Swal from "sweetalert2";
import debug from "debug";

const log = debug("cafeaulsfm:src:pages:JournalPage");

export default function JournalPage({ user, post, setPost }) {
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
    <div className="flex flex-col justify-center items-center mb-4">
      <i className="text-3xl font-bold mb-4">Welcome Home {user.username}! Ⴚტ◕‿◕ტჂ</i>
    </div>

      {post.length == 0 && <JournalHero />}

      <div className="grid grid-cols-3 gap-4">
        {post.length !== 0 &&
          post.map((postItem, index) => (
            <JournalPostCard
              key={postItem._id}
              index={index}
              postItem={postItem}
              handleDelete={handleDelete}
              post={post}
              setPost={setPost}
            />
          ))}
      </div>
    </>
  );
}
