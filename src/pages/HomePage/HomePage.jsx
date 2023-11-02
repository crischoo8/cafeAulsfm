import '../../../public/assets/lsfmbackground.mp4'

export default function HomePage() {

    return(
        <>
         <div>
            <video loop autoPlay muted>
                <source src={'/assets/lsfmbackground.mp4'} type='video/mp4'/>
            </video>
         </div>
        </>
    )
}