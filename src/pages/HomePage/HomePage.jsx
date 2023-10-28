import JournalPostCard from "../../components/JournalPostCard/JournalPostCard"

export default function HomePage({user}) {

    return(
        <>
         <h6>this is the HomePage</h6>
         <h1>Welcome Home {user.username}! Ⴚტ◕‿◕ტჂ</h1>
         <br/>
         <JournalPostCard/>
        </>
    )
}