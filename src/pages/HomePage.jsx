import NavBar from "../components/NavBar" 

  function HomePage() {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center px-4 bg-[url('/bg.svg')] bg-auto "> 
        <NavBar/>
        <div className="flex-col gap-7 flex items-center text-center">
          <h1 className="text-[52px] leading-[110%] font-bold tracking-[-0.52px] text-[#27272A]">
            Create, collaborate, and <br />
            scale your blogs and docs.
          </h1>
          <p className="mx-auto max-w-[652px] leading-[28px] text-[18px] text-[#52525B]">
            Effortlessly build blogs, API docs, and product guides with Hashnode, with <br/>
            the flexibility of a headless CMS and more.
          </p>
          <div className='flex gap-2'>
            <button className='bg-[#212124] text-white rounded-full px-7 py-2 w-max text-[16px] hover:bg-black shadow-xl/20'>
              Sign up for free
            </button>
            <button className='bg-white text-black rounded-full border-gray-200 border px-7 py-2 w-max text-[16px] hover:bg-gray-200'>
              Talk to founders
            </button>
          </div>
          <p className='text-gray-500 text-sm'>
            No credit card required.
          </p>
        </div>
        <div>
          {/* <img src='/download.svg' alt='Pic1' className='h-auto'></img> */}
        </div>
      </div>
    )
  }

  export default HomePage