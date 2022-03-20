import { faTruckMoving, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactContent = () => {
    return (
        <>
            <div className="contact-content-img h-96"></div>
            <div className="mt-[-15rem] text-center text-neutral absolute my-auto w-full">
                <FontAwesomeIcon icon={faTruckMoving} className="text-primary text-sm" />
                <h1 className="text-3xl font-normal">Contact Us</h1>
                <h3 className="tetx-xl font-normal">We are the courier service for your donations.</h3>
            </div>

            <div className="h-[28rem]"></div>


            <div className="mt-[-37rem] flex justify-center text-center  items-center absolute w-full py-auto">

                {/* <div className="pl-16 bg-base-200 rounded-l-xl p-4 h-[32.5rem] py-auto flex items-center text-center">
                 <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-[15rem] text-primary "/>
                </div> */}
                
                <form action="">    
                    <div className="form-control bg-base-200 rounded-xl p-8 w-[60rem] my-8 ">

                        <p className="text-lg">Have Some Questions?</p>
                        
                        <div className="flex flex-rows justify-center gap-8 mt-5">

                            <label className="input-group m-2">
                                <span>Name</span>
                                <input type="text" placeholder="John Doe" className="input w-[21rem] input-bordered"></input>
                            </label>

                            <label className="input-group m-2">
                                <span>Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered w-[21rem]"></input>
                            </label>

                        </div>

                        <textarea className="textarea textarea-bordered m-4 h-10" placeholder="Subject"></textarea>

                        <textarea className="textarea textarea-bordered m-4 h-44 rounded-2xl" placeholder="Message"></textarea>

                        <button className="btn btn-outline btn-primary m-auto mt-2 w-48">Submit</button>
                
                    </div>

                </form>

                

            </div>
        </>
    );
}

export default ContactContent;