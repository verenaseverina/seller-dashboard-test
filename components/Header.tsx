export default function Example() {
  return (  
  <div className="mx-auto flex justify-between bg-black">
    <div className="flex justify-start items-center px-10 py-6 space-x-36 text-white font-medium">
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
    <div className="flex justify-end px-10 py-6">
      USER
    </div>
  </div>
  )
}