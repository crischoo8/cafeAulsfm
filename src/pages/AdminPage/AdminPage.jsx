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

export default function AdminPage({adminPost}) {
    
      return (
        <>
          <h1>hello! the Admin Page is here!</h1>
          {JSON.stringify(adminPost?.length)}
          {/* conditional rendering based on length of posts */}
          {adminPost?.length === 0 && <JournalHero/>}
          {adminPost?.length !==0 && adminPost?.map((postItem, index) => (
            <AdminPostCard
              key={postItem._id}
              index={index}
              postItem={postItem}
            />
          ))}
        </>
      );
    }
    