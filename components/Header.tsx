export default function Example() {
  return (  
  <div className="mx-auto flex justify-between bg-black">
    <div className="flex justify-start items-center px-10 py-1 space-x-36 text-white font-medium">
      <a href="#">
        <span className="">LOGO</span>
      </a>
      <div className="md:flex items-center space-x-10">
        <a href="#" className="whitespace-nowrap text-base font-thin text-white hover:text-gray-400">
          EVENTS
        </a>
        <a href="#" className="whitespace-nowrap text-base font-thin text-white hover:text-gray-400">
          FEATURES
        </a>
        <a href="#" className="whitespace-nowrap text-base font-thin text-white hover:text-gray-400">
          COMMUNITY
        </a>
        <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-400">
          CATALOGUE
        </a>
      </div>
    </div>
    <div className="flex justify-end px-10 py-1">
      <div className="relative">
        <img className="w-12" src="/profile-pic.png" />
        <img className="absolute top-2 right-2.5 w-2" src="/red-dot.svg" />
      </div>
    </div>
  </div>
  )
}