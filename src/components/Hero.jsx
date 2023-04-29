const Hero = () => {
  return (
    <div className="flex flex-col justify-start text-white bg-black h-[90vh] w-full mt-auto mb-auto">
      <div className="flex flex-col mt-[3rem pt-[8rem] md:p-[8rem] md:justify-center md:ml-auto md:mr-auto">
        <h1 className="font-bold text-[2rem] md:text-[5rem] md:text-center pl-2">
          Are you a coder?
        </h1>
        <p className="font-light md:text-[2.5rem] md:text-center pl-2">
          Join us for our very own SA Web3 hackathon!
        </p>
        <form className="mt-5 w-full flex flex-col md:flex md:flex-col md:w-[50%] md:ml-auto md:mr-auto pr-2 pl-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-[12px] py-2 md:px-16"
          />
          <button className="text-white bg-orange-400 rounded-[12px] mt-4 py-2 px-6 md:px-16">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
