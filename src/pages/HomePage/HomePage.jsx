import JournalPostCard from "../../components/JournalPostCard/JournalPostCard"

export default function HomePage({user}) {

    return(
        <>
         <h1>this is the HomePage</h1>
         <h1>Welcome Home {user.username}! Ⴚტ◕‿◕ტჂ</h1>
         <br/>
         <JournalPostCard/>
        </>
    )
}