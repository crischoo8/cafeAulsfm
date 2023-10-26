import { RxCross1 } from "react-icons/rx";
import { PiPencil, PiPlusDuotone, PiTrashDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaRegFaceKiss } from "react-icons/fa6";

// has placeholder values for now 
export default function JournalPostCard() {
    
    return(
        <>
         <article>
      <div className="bg-gray-200 p-3 m-1 h-[100%] rounded-lg shadow md:flex-row md:max-w-xl">
        <span className="flex items-center justify-end">
          <span className="tooltip tooltip-top" data-tip="Edit Post">
            {/* <Link to={`/wardrobe/${item._id}/edit`}> */}
              <PiPencil className="text-xl mb-2 mr-[2px] text-black cursor-pointer" />
            {/* </Link> */}
          </span>
          {/* <span className="tooltip tooltip-bottom" data-tip="Add Frequency">
            <PiPlusDuotone
              className="text-xl mb-2 mr-[2px] text-black cursor-pointer"
            />
          </span> */}
          <span className="tooltip tooltip-top" data-tip="Delete Post">
            <PiTrashDuotone
              className="text-xl mb-2 text-black cursor-pointer"
            />
          </span>
        </span>

        <img
          className="h-auto max-w-full rounded-lg object-cover mx-auto"
          src="./public/assets/rizzCat.jpeg"/>
        <div className="flex flex-col justify-between p-2 leading-normal">
          {/* title */}
          <p className=" text-zinc-500" >
            <i className="text-zinc-600">rizz cat dingus</i>
          </p>
          {/* description */}
          <p className="text-zinc-600">
              handsomest boi!
          </p>
           {/* URL / Link */}
           <p className="text-zinc-600 hover:text-indigo-400">
              <a href="https://www.tiktok.com/@fish___gang/video/7282884444090895658" target="blank">link</a>
          </p>
          {/* tags */}
          <p className="text-zinc-600  hover:text-indigo-400">
              #dingus #dingusMyIdol
          </p>

          <p className="text-zinc-600">
              {/* <FaRegFaceKiss className="ml-1" /> */}
           
          </p>
        </div>
      </div>
    </article>
    </>
    )
}

{/* <table>
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
</table> */}