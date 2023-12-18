
import resume from '../assets/resume.svg'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <div className='container my-6' id='Svgg'>
       <div ><img src={resume} alt="Sorry Can't load" id='resumeSVG'/></div>
       <div id="slogun"> Unlock Your Potential, Craft Your Journey:  <span className="fw-bolder" id="title1">
              Re-
            </span>
            <span className="fw-bold">Assume</span> – Your Personal Resume Builder</div>
    </div>
    <div className="text-center" role="search" >
      Create Your First resume and start the new Jounery with Re-Assume
    <div><Link to="/login" className=" button is-primary fw-bolder ">
       Get Started...
    </Link></div>
  </div>
  </>
  )
}
