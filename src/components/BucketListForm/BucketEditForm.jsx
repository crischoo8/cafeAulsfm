import debug from "debug";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  updateCardService,
  swalBasicSettings,
} from "../../utilities/cards-service";
import Swal from "sweetalert2";

export default function BucketEditForm() {
    const { bucketItemID } = useParams();
    const navigate = useNavigate();

    const [bucket, setBucket] = useState([]);

    const initialBucketData = {
        title: "",
        description: "",
        url: "",
      };
    
      const [bucketData, setBucketData] = useState(initialBucketData);
     
    
      const [status, setStatus] = useState(null);
    
      const resetBucketForm = () => {
        setBucketData(initialPostBucket);
        setStatus(null);
      };
    
      const handleChange = (e) => {
        setBucketData({
          ...bucketData,
          [e.target.name]: e.target.value,
        });
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const newBucket = await updateCardService({
            ...bucketData
          });
    
          setBucket((prevBucket) => [...prevBucket, newBucket]);
          console.log(bucket);
          resetBucketForm();
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
        <section className="flex justify-center items-center min-h-[80vh]">
          <form
            className="container bg-neutral-400 mx-auto max-w-lg px-4 pb-8"
            onSubmit={handleSubmit}
            autoComplete="off"
            encType="multipart/form-data"
          >
            <header className="text-black font-inter font-light text-2xl text-center my-4">
              Add to Bucket List!
            </header>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2 relative">
                <label
                  htmlFor="title"
                  className="block mb-1 text-sm font-inter font-light text-neutral-600"
                >
                  Title {""}
                </label>
                <input
                  id="title"
                  name="title"
                  value={bucketData.title}
                  onChange={handleChange}
                  required
                  className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-pointer font-inter font-extralight"
                ></input>
              </div>
              <div className="w-1/2 pl-2 relative">
                <label
                  htmlFor="description"
                  className="block mb-1 text-sm font-inter font-light text-neutral-600"
                >
                  Description {""}
                </label>
                <input
                  id="description"
                  name="description"
                  value={bucketData.description}
                  onChange={handleChange}
                  disabled={!bucketData.title}
                  required
                  className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-pointer font-inter font-extralight disabled:cursor-default"
                ></input>
              </div>
            </div>
    
            <div className="flex mb-6">
              <div className="w-1/2 pr-2 relative">
                <label
                  htmlFor="url"
                  className="block mb-1 text-sm font-inter font-light text-neutral-600"
                >
                  URL {""}
                </label>
                <input
                  id="url"
                  name="url"
                  value={bucketData.url}
                  onChange={handleChange}
                  //   required
                  className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-pointer font-inter font-extralight"
                ></input>
              </div> 
            </div>
    
            {status === "loading" ? (
              <div className="flex items-center justify-center">
                <span className="loading loading-dots loading-lg bg-gray-500 px-3 py-2.5 "></span>
              </div>
            ) : (
              <div className="flex gap-10">
                <button
                  type="submit"
                  className="text-white bg-[#7ba6de] hover:bg-[#0d1c27] focus:ring-2 focus:outline-none focus:ring-gray-400 font-bebas font-normal text-3xl px-3 py-2.5 text-center w-full"
                >
                  SUBMIT
                </button>
                <Link
                  to="/journal"
                  className="text-white bg-black hover:bg-slate-900 focus:ring-2 focus:outline-none focus:ring-gray-400 font-bebas font-normal text-3xl px-3 py-2.5 text-center w-full"
                >
                  CANCEL
                </Link>
              </div>
            )}
          </form>
        </section>
      );
}