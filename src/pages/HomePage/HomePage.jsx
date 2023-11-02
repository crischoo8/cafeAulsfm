import '../../../public/assets/lsfmbackground.mp4'

export default function HomePage({user}) {

    return(
        <>
         {/* <h1>this is the HomePage</h1>
         <h1>Welcome Home {user.username}! Ⴚტ◕‿◕ტჂ</h1>
         <br/> */}
         <div>
            <video loop autoPlay muted>
                <source src={'../../../public/assets/lsfmbackground.mp4'} type='video/mp4'/>
            </video>
         </div>
        </>
    )
}