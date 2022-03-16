import { faTruckMoving} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CharityCards = () => {
    return (
        <>
            <div className="">
                <div className="text-center mb-16"> 
                    <FontAwesomeIcon icon={faTruckMoving} className="text-primary text-sm" />
                    <h1 className="text-3xl">Grossing Charities</h1>
                    <h3 className=" text-xl">A selecion of charities you can choose from</h3>
                </div>
                <div className="grid grid-cols-3 gap-y-10 h-screen place-items-center mx-auto w-10/12 mb-16">

                    <div className="flip-card w-96 bg-neutral text-center ">
                        <div className="flip-card-inner shadow-xl relative">
                            <div className="flip-card-front">
                                <div className="card-body bg-neutral rounded-t-2xl">
                                    <h2 className="text-center font-normal text-lg">British Heart Foundation</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque.</p>
                                </div>
                                <figure><img className="brightness-150 grayscale-[50%] object-cover rounded-b-2xl " src="/img/british-hf.jpeg" alt="" /></figure>
                            </div>
                            <div className="flip-card-back rounded-2xl ">
                                    <h3 className="font-normal">What we do</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit ex explicabo nesciunt asperiores hic enim! Molestiae, aspernatur! Voluptatibus consequuntur perferendis corrupti eum provident molestiae ut aut nisi molestias eius?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.</p>  
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-96 bg-neutral text-center">
                        <div className="flip-card-inner shadow-xl relative">
                            <div className="flip-card-front">
                                <div className="card-body bg-neutral rounded-t-2xl">
                                    <h2 className="text-center font-normal text-lg">Shelter</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque.</p>
                                </div>
                                <figure><img className="brightness-[85%] grayscale-[50%] object-cover h-[15rem]  rounded-b-2xl" src="/img/shelter.jpeg" alt="" /></figure>
                            </div>
                            <div className="flip-card-back rounded-2xl">
                                    <h3 className="font-normal">What we do</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit ex explicabo nesciunt asperiores hic enim! Molestiae, aspernatur! Voluptatibus consequuntur perferendis corrupti eum provident molestiae ut aut nisi molestias eius?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.</p>  
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-96 bg-neutral text-center">
                        <div className="flip-card-inner shadow-xl relative">
                            <div className="flip-card-front">
                                <div className="card-body bg-neutral  rounded-t-2xl">
                                    <h2 className="text-center font-normal text-lg">Cancer Research</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque.</p>
                                </div>
                                <figure><img className="brightness-[85%] grayscale-[50%] object-cover h-[15rem]  rounded-b-2xl" src="/img/cancer-research.jpeg" alt="" /></figure>
                            </div>
                            <div className="flip-card-back rounded-2xl">
                                    <h3 className="font-normal">What we do</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit ex explicabo nesciunt asperiores hic enim! Molestiae, aspernatur! Voluptatibus consequuntur perferendis corrupti eum provident molestiae ut aut nisi molestias eius?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.</p>  
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-96 bg-neutral text-center">
                        <div className="flip-card-inner shadow-xl relative">
                            <div className="flip-card-front">
                                <div className="card-body bg-neutral  rounded-t-2xl">
                                    <h2 className="text-center font-normal text-lg">BBC Children In Need</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque.</p>
                                </div>
                                <figure><img className="brightness-[85%] grayscale-[50%] object-cover h-[15rem]  rounded-b-2xl" src="/img/children-in-need.jpeg" alt="" /></figure>
                            </div>
                            <div className="flip-card-back rounded-2xl">
                                    <h3 className="font-normal">What we do</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit ex explicabo nesciunt asperiores hic enim! Molestiae, aspernatur! Voluptatibus consequuntur perferendis corrupti eum provident molestiae ut aut nisi molestias eius?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.</p>  
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-96 bg-neutral text-center">
                        <div className="flip-card-inner shadow-xl relative">
                            <div className="flip-card-front">
                                <div className="card-body bg-neutral  rounded-t-2xl">
                                    <h2 className="text-center font-normal text-lg">Oxfam</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque.</p>
                                </div>
                                <figure><img className="brightness-[90%] grayscale-[50%] object-cover h-[15rem] w-[25rem] rounded-b-2xl" src="/img/Oxfam_2013.jpeg" alt="" /></figure>
                            </div>
                            <div className="flip-card-back rounded-2xl">
                                    <h3 className="font-normal">What we do</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit ex explicabo nesciunt asperiores hic enim! Molestiae, aspernatur! Voluptatibus consequuntur perferendis corrupti eum provident molestiae ut aut nisi molestias eius?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.</p>  
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-96 bg-neutral text-center">
                        <div className="flip-card-inner shadow-xl relative">
                            <div className="flip-card-front">
                                <div className="card-body bg-neutral  rounded-t-2xl">
                                    <h2 className="text-center font-normal text-lg">Alzheimer's Research UK</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque.</p>
                                </div>
                                <figure><img className="brightness-[90%] grayscale-[50%] object-cover h-[15rem]  rounded-b-2xl" src="/img/alzheimers_research_uk_logo.png" alt="" /></figure>
                            </div>
                            <div className="flip-card-back rounded-2xl">
                                    <h3 className="font-normal">What we do</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit ex explicabo nesciunt asperiores hic enim! Molestiae, aspernatur! Voluptatibus consequuntur perferendis corrupti eum provident molestiae ut aut nisi molestias eius?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.</p>  
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default CharityCards;