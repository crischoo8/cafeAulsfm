import BucketListCard from "../../components/BucketListCard/BucketListCard";
import BucketListHero from "./BucketListHero";
import { deleteCardService, swalBasicSettings } from "../../utilities/cards-service";
import { useState } from "react";
import Swal from "sweetalert2";

export default function BucketListPage({user, bucket, setBucket}) {

    const handleDelete = async (bucketlistItemID) => {
        const prompt = await Swal.fire({
          ...swalBasicSettings("Proceed to delete?", "warning"),
          text: "Your bucket list item will be deleted",
          showCancelButton: true,
          confirmButtonText: "DELETE",
          cancelButtonText: "CANCEL",
        });
    
        if (prompt.isConfirmed) {
          try {
            await deleteCardService(bucketlistItemID);
            const remainingCard = bucket.filter((item) => item._id !== bucketlistItemID);
            setBucket(remainingCard);
            Swal.fire(swalBasicSettings("Deleted!", "success"));
          } catch (err) {
            console.log(err)
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
      <i className="text-3xl font-bold mb-4">{user.username}'s Bucket List ٩(◕‿◕)۶</i>
    </div>

        {/* conditional rendering based on length of bucket/BucketList */}
        {bucket.length ==0 && <BucketListHero/>}
        
        <div className="grid grid-cols-3 gap-4">
        {bucket.length !==0 && bucket.map((bucketItem, index) => (
            <BucketListCard
            key={bucketItem._id}
            index={index}
            bucketItem={bucketItem}
            handleDelete={handleDelete}
            bucket={bucket}
            setBucket={setBucket}
            />
        ))}
        </div>
        </>
    );
}