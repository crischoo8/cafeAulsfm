import {
    PiCoffeeDuotone,
    PiPencil,
    PiLinkSimpleBold,
    PiTrashDuotone,
  } from "react-icons/pi";
  import { Link, useNavigate } from "react-router-dom";
  import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
  import { useState } from "react";
  import { addCardService,swalBasicSettings } from "../../utilities/cards-service";
  import Swal from "sweetalert2";

  export default function AdminPostCard({postItem, bucket, setBucket}) {
    const [color, setColor] = useState(false);
    const icon = color ? <AiFillHeart/> : <AiOutlineHeart/>
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
      const handleClick = async () => {
    
        // need to spread the bucketData....if not payload wont work LOL
        try {
            const newCardData = {
                title: postItem?.title,
                description: postItem?.description,
                url: postItem?.url,
            };
            console.log(newCardData)
          const newBucket = await addCardService({
            ...newCardData
          });
    
          setBucket((prevBucket) => [...prevBucket, newBucket]);
        //   console.log(bucket);
          console.log('Before toggle: ', color);
          await setColor(!color);
          console.log('After toggle: ', color);
          console.log("Before navigation");
          await navigate("/bucketlist");
          console.log("After navigation");
          
          Swal.fire(swalBasicSettings("Your Bucket is Updated!", "success"));
          
        } catch (err) {
          if (err.message === "bucket is not iterable") {
            Swal.fire({
              ...swalBasicSettings("OK"),
              text: "Bucket Created.",
            });
          } else if (err.message === "Unexpected end of JSON input") {
            Swal.fire({
              ...swalBasicSettings("Internal Server Error", "error"),
              text: "Please try again later.",
            });
          } else {
            Swal.fire({
              ...swalBasicSettings("Error", "error"),
              text: err.message,
              confirmButtonText: "Try Again",
            });
          }
          setStatus("error");
        } finally {
          setStatus("success");
        }
      };
    
    return (
      
      <>
        <article>
          <div className="bg-gray-200 p-3 w-full m-1 h-[100%] rounded-lg shadow md:flex-row md:max-w-xl">
            <img
              className="h-auto w-1/2 rounded-lg object-cover mx-auto"
              //   src="./assets/rizzCat.jpeg"
              src={postItem?.imageURL}
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
              {/* title */}
              <p className=" text-zinc-500">
                <i className="text-zinc-600">
                  {/* rizz cat dingus */}
                  {postItem?.title}
                </i>
              </p>
              {/* description */}
              <p className="text-zinc-600">
                {/* handsomest boi! */}
                {postItem?.description}
              </p>
              {/* URL / Link */}
              <p className="text-zinc-600 hover:text-indigo-400">
                <a
                  //   href="https://www.tiktok.com/@fish___gang/video/7282884444090895658"
                  href={postItem?.url}
                  target="blank"
                >
                  <PiLinkSimpleBold />
                </a>
              </p>
              {/* tags */}
              <p className="text-zinc-600  hover:text-indigo-400">
                {/* #dingus #dingusMyIdol */}# {postItem?.tag}
              </p>
  
              <p className="flex justify-end text-indigo-600 text-3xl" 
                //   onClick={() => {
                //     setColor(!color);
                //     }}
                // onClick={handleClick}
                onClick={handleClick}
                // onMouseOver={() => setColor(!color)}
                 >
                
                {icon}
              </p>
            </div>
          </div>
        </article>
      </>
    );
  }