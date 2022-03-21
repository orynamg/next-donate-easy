
const NearMeContent = () => {
  return (
    <>
      <div className="h-screen drawer drawer-mobile w-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"></input>
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-info pt-28 px-8">
            {/* <!-- Sidebar content here --> */}
            <h1 className="my-2 font-normal">Location</h1>
            <input type="text" placeholder="N10 2PD - Cromwell Rd" className="input input-bordered input-info py-6 max-w-xs text-center my-2 bg-[#B9CEEF] placeholder:text-[#065782] placeholder: text-base hover:bg-info hover:placeholder:text-[#B9CEEF] hover:border-[#B9CEEF] ease-in-out duration-500 cursor-pointer"></input>
            <div className="form-control">
                <label className="label cursor-pointer ">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="toggle toggle-primary" checked></input>
                </label>
              </div>
            <p className="underline text-sm cursor-pointer mt-2">Clear All</p>
            <h1 className="my-2 font-normal">Sort</h1>
            <div className="flex flex-col">
              <label className="flex flex-row items-center py-1">
                <input type="radio" name="radio-2" className="radio radio-primary m-1"></input>
                Local Charities
              </label>
              <label className="flex flex-row items-center py-1">
                <input type="radio" name="radio-2" className="radio radio-primary m-1"></input>
                Health
              </label>
              <label className="flex flex-row items-center py-1">
                <input type="radio" name="radio-2" className="radio radio-primary m-1"></input>
                Children & Adolescence
              </label>
              <label className="flex flex-row items-center py-1">
                <input type="radio" name="radio-2" className="radio radio-primary m-1"></input>
                Other
              </label>
            </div>
            <h1 className="my-2 font-normal">Top Deals</h1>
            <li><a>Free Delivery Friday</a></li>
            <h1 className="my-1 font-normal">Max Delivery Fee</h1>
            <div className="my-4">
              <input type="range" min="0" max="100" value="25" className="range " step="25"></input>
              <div className="w-full flex justify-between text-xs px-2">
                <span>£0.50</span>
                <span>£0.75</span>
                <span>£1.00</span>
                <span>£1.25</span>
                <span>£1.50</span>
                <span>£1.75</span>
              </div>
            </div>
            <h1 className="my-1 font-normal">Location Radius</h1>
            <div className="my-4">
              <input type="range" min="0" max="100" value="25" className="range " step="25"></input>
              <div className="w-full flex justify-between text-xs px-2">
                <span>0.5m</span>
                <span>1m</span>
                <span>1.5m</span>
                <span>2m</span>
                <span>2.5m</span>
                <span>3m</span>
              </div>
            </div>
          </ul>

        </div>
      </div>


    </>
  )
};

export default NearMeContent;