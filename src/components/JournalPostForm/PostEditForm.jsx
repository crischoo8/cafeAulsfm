import debug from "debug";
import { FaCaretDown, FaRegFileImage } from "react-icons/fa6";
import { useState } from "react";
import { GiPhotoCamera} from "react-icons/gi";
import { useParams, useNavigate, Link } from "react-router-dom";


const log = debug("cafeaulsfm:src:components:JournalPostForm");

export default function PostEditForm({post, setPost}) {
    const { postID } = useParams();
    const navigate = useNavigate();

    // images is not in this initialJournalData but it will be appended
    const initialJournalData= {
        title: "",
        description: "",
        url: "",
        tag: "",
      };

    const [journalData, setJournalData] = useState(initialJournalData);
    const [imageFiles, setImageFiles] = useState({
        images: [],
        preview: [],
        filenames: [],
    });

    const [status, setStatus] = useState(null);

    const resetJournalPostForm = () => {
        setJournalData(initialJournalData);
        setImageFiles({ images: [], preview: [], filenames: [] });
        setStatus(null);
      };

    const handleChange = (e) => {
        setJournalData({
          ...journalData,
          [e.target.name]: e.target.value,
        });
      };

    const handleImgFileInput = (e) => {
    const imgFiles = Array.from(e.target.files);
    const updatedPreview = [];
    const updatedFilenames = [];

    imgFiles.forEach((img) => {
        const imgUrl = URL.createObjectURL(img);
        updatedPreview.push(imgUrl);
        updatedFilenames.push(img.name);
    });
    log("imges", imgFiles);
    setImageFiles({
        images: [...imageFiles.images, ...imgFiles],
        preview: [...imageFiles.preview, ...updatedPreview],
        filenames: [...imageFiles.filenames, ...updatedFilenames],
    });
    log("Image uploaded");
    };

    const handleRemoveImage = () => {
        setImageFiles({
          images: [],
          preview: [],
          filenames: [],
        });
      };
    
    //   write the HANDLE SUBMIT function

    return(
        <section className="flex justify-center items-center min-h-[80vh]">
      <form
        className="container bg-neutral-400 mx-auto max-w-lg px-4 pb-8"
        // onSubmit={handleSubmit}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <header className="text-black font-inter font-light text-2xl text-center my-4">
          Create Journal Post!
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
              value={journalData.title}
              onChange={handleChange}
              required
              className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-pointer font-inter font-extralight"
            >
              
              
            </input>
            {/* <FaCaretDown className="absolute right-3 top-7 text-gray-500 pointer-events-none z-50 text-3xl" /> */}
          </div>
          <div className="w-1/2 pl-2 relative">
            <label
              htmlFor="description"
              className="block mb-1 text-sm font-inter font-light text-neutral-600"
            >
              Description {""}
            </label>
            <textarea
              id="description"
              name="description"
              value={journalData.description}
              onChange={handleChange}
              disabled={!journalData.title}
              required
              className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-pointer font-inter font-extralight disabled:cursor-default"
            >
            </textarea>
            {/* <FaCaretDown className="absolute right-1 top-7 text-gray-500 pointer-events-none z-50 text-3xl" /> */}
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
              value={journalData.url}
              onChange={handleChange}
              required
              className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-pointer font-inter font-extralight"
            >
              
              
            </input>
            {/* <FaCaretDown className="absolute right-3 top-7 text-gray-500 pointer-events-none z-50 text-3xl" /> */}
          </div>
          <div className="w-1/2">
            <div className="pr-2 mb-6 relative">
              <label
                htmlFor="tag"
                className="block mb-1 text-sm font-inter font-light text-neutral-600"
              >
                Tag {""}
              </label>
              <input
                id="tag"
                name="tag"
                value={journalData.tag}
                onChange={handleChange}
                required
                className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-pointer font-inter font-extralight"
              >
              
              </input>
            </div>
          </div>
        </div>

        <div className="pr-2 mb-6">
            <label
                className="block mb-1 text-sm font-inter font-light text-neutral-600"
                htmlFor="image"
              >
                Image
              </label>
              {imageFiles.images.length  !== 0 ? (
                <span>
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="btn btn-neutral rounded-none bg-neutral-300 text-neutral-500 border-none mb-2"
                  >
                    Remove File
                  </button>
                  <h3 className="text-neutral-500 font-inter font-normal flex items-center justify-start">
                    <FaRegFileImage className="text-xl" />
                    {imageFiles.filenames}
                  </h3>
                </span>
              ) : (
                <input
                  className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full cursor-pointer font-inter font-extralight"
                  id="image"
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImgFileInput}
                />
              )}

            <div className="w-1/2 pl-2">
                {imageFiles.images.length !== 0 ? (
                imageFiles.preview.map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    alt={`Preview Image ${idx + 1}`}
                    className="mx-auto rounded-lg mt-1"
                    />
                ))
                ) : (
                <div className="w-1/2">
                    <span className="w-[300px] h-[200px] flex justify-center items-center border-dashed border-2 border-neutral-300">
                    <GiPhotoCamera className="text-8xl fill-neutral-300" />
                    </span>
                </div>
                )}
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
    )
}