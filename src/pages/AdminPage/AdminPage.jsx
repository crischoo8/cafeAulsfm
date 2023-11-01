import JournalPostCard from "../../components/JournalPostCard/JournalPostCard";
import JournalHero from "../JournalPage/JournalHero";
import {
  swalBasicSettings,
  deletePostService,
} from "../../utilities/posts-service";
import Swal from "sweetalert2";
import debug from "debug";
import { useState } from "react";

const log = debug("cafeaulsfm:src:pages:AdminPage");

export default function AdminPage({adminPost, setAdminPost}) {
    // const [post, setPost] = useState([]);
    // const handleDelete = async (postID) => {
    //     const prompt = await Swal.fire({
    //       ...swalBasicSettings("Proceed to delete?", "warning"),
    //       text: "Your favourite outfit containing this apparel will also be deleted.",
    //       showCancelButton: true,
    //       confirmButtonText: "DELETE",
    //       cancelButtonText: "CANCEL",
    //     });
    
    //     if (prompt.isConfirmed) {
    //       try {
    //         await deletePostService(postID);
    //         const remainingPost = post.filter((item) => item._id !== postID);
    //         log("deleted post:", remainingPost);
    //         setPost(remainingPost);
    //         Swal.fire(swalBasicSettings("Deleted!", "success"));
    //       } catch (err) {
    //         console.error(err);
    //         Swal.fire({
    //           ...swalBasicSettings("Error", "error"),
    //           text: "Unable to delete. Please try again!",
    //         });
    //       }
    //     }
    //   };
    
      return (
        <>
          <h1>hello! the Admin Page is here!</h1>
          {/* {JSON.stringify(post.length)} */}
          {/* conditional rendering based on length of posts */}
          {adminPost.length ==0 && <JournalHero/>}
          {adminPost.length !==0 && adminPost.map((postItem, index) => (
            <JournalPostCard
              key={postItem._id}
              index={index}
              postItem={postItem}
            //   handleDelete={handleDelete}
              post={post}
              setPost={setPost}
            />
          ))}
        </>
      );
    }
    