import {
  PiCoffeeDuotone,
  PiPencil,
  PiLinkSimpleBold,
  PiTrashDuotone,
} from "react-icons/pi";
import { Link } from "react-router-dom";

export default function JournalPostCard({ postItem, handleDelete }) {
  return (
    <>
      <article>
        <div className="bg-gray-200 p-3 w-full m-1 h-[100%] rounded-lg shadow md:flex-row md:max-w-xl">
          <span className="flex items-center justify-end">
            <span className="tooltip tooltip-top" data-tip="Edit Post">
              <Link to={`/journal/${postItem?._id}/edit`}>
                <PiPencil className="text-xl mb-2 mr-[2px] text-black cursor-pointer" />
              </Link>
            </span>

            <span className="tooltip tooltip-top" data-tip="Delete Post">
              <PiTrashDuotone
                onClick={() => handleDelete(postItem?._id)}
                className="text-xl mb-2 text-black cursor-pointer"
              />
            </span>
          </span>

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

            <p className="text-zinc-600">
              <PiCoffeeDuotone />
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

{
  /* <table>
<tbody> 
<tr>
    <td>
        <p>Ⴚტ◕‿◕ტჂ</p>
    </td>
</tr>
<tr>
    <td>
        <strong>title:</strong> hello
       
    </td>
</tr>
<tr>
    <td>
        i am so sleepy
    </td>
</tr>
<tr>
    <td>
        <button 
        >delete</button>
        <button 
        >edit</button>
    </td>
</tr>

</tbody>
</table> */
}
