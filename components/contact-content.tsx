import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// bg-[url('/img/countryside2.jpeg')]

const ContactContent = () => {
    return (
        <>
            <div className="about-content-img w-100 h-56 bg-[center_top_-8rem] shadow-inner"></div>
            <div className="pt-7 mt-7 mb-[10rem] text-center absolute my-auto w-full ">
                <FontAwesomeIcon icon={faTruckMoving} className="text-primary text-sm" />
                <h1 className="text-3xl">About Us</h1>
                <h3 className="tetx-xl">We are the courier service for your donations.</h3>
            </div>
            </>
    );
}

export default ContactContent;