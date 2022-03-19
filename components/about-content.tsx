import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// bg-[url('/img/countryside2.jpeg')]

const AboutContent = () => {
    return (
        <>
            <div className="about-content-img w-100 h-56 bg-[center_top_-8rem] shadow-inner"></div>
            <div className="pt-7 mt-7 mb-[10rem] text-center absolute my-auto w-full ">
                <FontAwesomeIcon icon={faTruckMoving} className="text-primary text-sm" />
                <h1 className="text-3xl">About Us</h1>
                <h3 className="tetx-xl">We are the courier service for your donations.</h3>
            </div>

            <div className="flex flex-row justify-center items-center mt-[4rem] mb-8">
                <div className="pb-12 flex flex-col w-3/5 px-auto">
                    <div className="px-24 py-4 text-justify">
                        <h2 className="text-lg pb-1 font-normal">Who We Are</h2>
                        <p className="mb-4">Assumenda laudantium corporis autem facere maiores esse incidunt numquam ratione quibusdam debitis, nemo vero possimus reprehenderit illo dolore quas iure dicta consequuntur vel sequi! Quos sit laborum dicta labore molestias quas odit minus accusantium adipisci nobis qui facere repellendus, voluptatum hic aspernatur? Vitae, molestias laudantium.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus commodi, quaerat quod odit aspernatur repellat, quibusdam, nostrum possimus quia omnis. Expedita cumque sit quisquam ducimus omnis vel, non repellendus, neque consectetur fugit reiciendis deleniti reprehenderit, excepturi amet esse error accusantium? Fugit laudantium quasi aperiam vel quo molestiae ullam excepturi. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis dicta itaque aliquam nobis architecto eius at. Fugit nihil et cum repellendus laborum vel recusandae, ad vitae harum deserunt error, odio eos soluta animi aspernatur.</p>

                    </div>

                    <div className="stats shadow mt-4">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                    </div>
                </div>

                <div>
                    <img className="w-[25rem] " src="/img/uk-bluebg-removebg-preview.png" alt="" />
                </div>

            </div>


        </>
    );
}

export default AboutContent;