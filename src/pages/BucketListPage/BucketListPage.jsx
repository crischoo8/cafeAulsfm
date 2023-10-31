import BucketListCard from "../../components/BucketListCard/BucketListCard";
import BucketListHero from "./BucketListHero";
import { useState } from "react";
export default function BucketListPage({bucket, setBucket}) {

    return (
        <>
        <h1>hello! your Bucket List is here!</h1>
        {/* conditional rendering based on length of bucket/BucketList */}
        {bucket.length ==0 && <BucketListHero/>}
        
        {bucket.length !==0 && bucket.map((bucketItem, index) => (
            <BucketListCard
            key={bucketItem._id}
            index={index}
            bucketItem={bucketItem}
            // handleDelete={handleDelete}
            bucket={bucket}
            setBucket={setBucket}
            />
        ))}
        {/* <BucketListCard/>         */}
        </>
    );
}