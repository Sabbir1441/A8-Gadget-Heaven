import bannerImg from "../assets/banner.jpg"
const Banner = () => {
  return (
    <div>
      <div className="mx-3 md:mx-4 lg:mx-7 rounded-b-xl bg-[#9538E2] text-white text-center pt-10 pb-56 space-y-5">
        <h1 className="max-w-[950px] leading-tight mx-auto text-5xl font-bold">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="max-w-[600px] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn px-7 rounded-full bg-white text-[#9538E2]">
          Shop Now
        </button>
      </div>
      <figure className="max-w-[800px] mx-auto -mt-44 border rounded-xl p-5 backdrop-blur-lg">
        <div className="bg-cover bg-center h-96 rounded-xl" style={{backgroundImage: `URL(${bannerImg})`}}>
        </div>
      </figure>
    </div>
  );
};
export default Banner;