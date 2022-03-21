import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import router, { Router } from 'next/router';
import React, { useState } from "react";

const Showcase = () => {


    const [enteredText, setEnteredText] = useState("");

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            // alert(`You have typed "${enteredText}"`);
            router.push('/near-me');
    
        }
    };
    
    return ( 
        <>

            <div className="showcase mb-14 h-screen opacity-90 shadow-md grid grid-cols-2">
                <div className="flex h-screen justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-slate-100 text-3xl mt-64">You Donate, We Deliver.</h1>
                        <h4 className="text-slate-100 text-xl ">A courier service to make charity easier for you </h4>
                    </div>

                </div>
                <div className="bg-base-100 flex items-center justify-center flex-col opacity-90">
                    <div className="w-1/2 text-center">

                        <FontAwesomeIcon icon={faHeart} className="text-primary" />

                        <h2 className="mb-2 text-2xl ">Welcome</h2>



                        <p className="mb-10 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium perferendis quisquam iure odit reiciendis ea dolores dicta voluptates dolorum labore tempora consequuntur, sed alias totam deleniti earum libero inventore.</p>
                        <h4 className="text-lg font-normal">Enter your address to find local charity shops</h4>

                    </div>

                    <div className="search-bar mt-2 p-4 w-3/5 bg-white rounded-full flex justify-between items-center">
                        <input onKeyDown={keyDownHandler} value={enteredText} onChange={(e) => setEnteredText(e.target.value)} type="text" placeholder="Enter Postcode" className="border-none outline-none pl-4 text-lg hover:outline-none"/>
                        <FontAwesomeIcon icon={faSearch} className="mr-3" />
                    </div>
                </div>
            </div>



        </>
    );
}

export default Showcase;
