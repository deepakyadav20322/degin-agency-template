'use client'
import React from "react";
import HomePage from "@/components/home";
import { motion } from "framer-motion";
export default function Home() {
  return (
        <div className="bg-white min-h-screen flex flex-col items-center relative">
          <img src="/download.png" className="absolute top-[15%] left-[7rem] arrow" alt="" />
          <img src="/download (1).png" className="absolute top-[15%] right-[7rem] arrow transform rotate-90" alt="" />
          <div className="bubble hidden  b_two w-8 h-8 lg:block absolute rounded-full top-[20%] left-[155px]"></div>
          <div className="bubble hidden bg-[#ff9398]  b_one w-8 h-8 lg:block absolute rounded-full top-[20%] right-[155px]"></div>
          <div className="bubble hidden bg-[#ff9398]  b_two w-3 h-3 lg:block absolute rounded-full top-[15%] left-[230px]"></div>
          <div className="bubble hidden bg-[#ff9398]  b_one w-3 h-3 lg:block absolute rounded-full top-[15%] right-[250px]"></div>
          
          {/* Header */}
          <header className="w-full flex justify-between items-center p-6">
            <div className="text-lg font-bold border-b-4 border-2 border-black p-1 rounded-md">YouDesign</div>
            <div>
              <button className="mr-4 border-2 border-black px-3 py-1 text-center rounded-3xl">Sign in</button>
              <button className="bg-black text-white py-2 px-4 rounded-full">
                Sign up <span className="ml-2">→</span>
              </button>
            </div>
          </header>
    
          {/* Main Section */}
          <main className="flex flex-col items-center text-center mt-10 px-4">
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Make your designs
            </h1>
            <h1 className="bg-gradient-to-r text-5xl sm:text-6xl lg:text-7xl font-bold from-blue-500 to-teal-400 bg-clip-text text-transparent">
            wonderful
          </h1>
            </div>
           
            <p className="text-gray-500 mt-4 max-w-md">
              Our landing page template works on all devices, so you only have to
              set it up once and get beautiful results forever.
            </p>
    
            {/* Call to Action Buttons */}
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-500 transition-all duration-100 text-white py-3 px-6 rounded-full mr-4">
                Start free trial
              </button>
              <button className="border border-black py-3 px-6 rounded-full hover:bg-neutral-100 transition-all duration-100">
                Learn more
              </button>
            </div>
    
            {/* Image and Video Section */}
            <motion.div className="mt-12 relative"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             
             transition={{ duration: 0.8, delay: 1 * 0.1 }}
            >
              <video
              autoPlay={true}
              controls={false}
              loop={true}
              muted={true}
              className="w-full max-w-xl rounded-lg shadow-lg"
              >
 
              <source src="demo.mp4" type="video/mp4"/>
              </video>
               
        

       
 {/* {bubble section ---} */}
              <div className="hidden md:absolute  -bottom-6 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-full shadow-md">
                <button className="flex flex-row items-center">
                  <img src="/play.png" className="material-icons mr-2 w-6"/>
                  Watch full video (1 min)
                </button>
              </div>
            </motion.div>
          </main>

          {/* ------------------------------------------------4 */}
    

          <motion.div className="relative min-h-[20rem] w-full max-w-7xl rounded-xl m-auto flex justify-center items-center bg-gradient-to-br from-blue-500  to-teal-400 my-14 py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            transition={{ duration: 0.6, delay: 1 * 0.1 }}
          >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Next.js + Tailwind Template</h1>
        <p className="text-lg mb-6">
          If the header and footer look like the screenshots in <code>src/assets/img</code>, Tailwind is set up and you can start coding.
        </p>

        {/* Language Buttons */}
        <div className="space-x-4">
          <button className="text-white py-2 px-6 rounded-md bg-black">Design</button>
          <button className="bg-white text-black py-2 px-6 rounded-md">Publish</button>
        </div>
      </div>
    </motion.div>

          {/* ------------------------------------------------4 */}

          
   <HomePage/>



         



          {/* Footer */}
         
<footer className="bg-neutral-100 border-t-gray-300 text-black py-8 w-full mt-6">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
 
    <div className="mb-4 md:mb-0">
      <h1 className="text-2xl font-bold">YouDesign</h1>
    </div>

  
    <ul className="flex space-x-6 mb-4 md:mb-0">
      <li><a href="#" className="hover:text-gray-400 hover:border-black hover:border-b-[1px]">Home</a></li>
      <li><a href="#" className="hover:text-gray-400 hover:border-black hover:border-b-[1px]">About</a></li>
      <li><a href="#" className="hover:text-gray-400 hover:border-black hover:border-b-[1px]">Services</a></li>
      <li><a href="#" className="hover:text-gray-400 hover:border-black hover:border-b-[1px]">Contact</a></li>
    </ul>

    {/* <!-- Social Media Links --> */}
    <div className="flex space-x-6">
      <a href="#" className="hover:text-gray-400">Facebook</a>
      <a href="#" className="hover:text-gray-400">Twitter</a>
      <a href="#" className="hover:text-gray-400">LinkedIn</a>
    </div>
  </div>

 
  <div className="mt-6 text-center text-gray-400">
    <p>© 2024 YouDesign. All rights reserved.</p>
  </div>
</footer>

        </div>
      );
};

