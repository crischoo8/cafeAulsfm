import AdminPostCard from "../../components/AdminPostCard/AdminPostCard";
import JournalHero from "../JournalPage/JournalHero";
import {
  swalBasicSettings,
  deletePostService,
} from "../../utilities/posts-service";
import Swal from "sweetalert2";
import debug from "debug";
import { useState } from "react";


const log = debug("cafeaulsfm:src:pages:AdminPage");

export default function AdminPage({adminPost, bucket, setBucket}) {
    
      return (
        <>
        <div className="h-screen flex flex-col justify-center items-center">

          <i className="text-3xl font-bold mb-4"> Official Announcements</i>
          {/* conditional rendering based on length of posts */}

          {adminPost?.length === 0 && <JournalHero/>}

        <div className="grid grid-cols-3 gap-4">
          {adminPost?.length !==0 && adminPost?.map((postItem, index) => (
            <AdminPostCard
              key={postItem._id}
              index={index}
              postItem={postItem}
              bucket={bucket}
              setBucket={setBucket}
            />
          ))}
        </div>

        </div>
        </>
      );
    }
    