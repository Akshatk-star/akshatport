import React from "react";
import { motion } from "motion/react"
import akshat from "../src/assets/aks.png"

export const Hero = () => {
  const redirect = () =>{
  window.location.href="#portfolio";
  };
    return(
        <>
         <div className="relative text-white overflow-clip min-h-screen bg-[linear-gradient(to_bottom,_#000,_#071E18_35%,_#208A65_67%,_#35FB8E_85%)]">
                 
                 <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,_#000_85%,_#249974)] top-[450px] border-[1px] border-[#8CD6DE]/30">
                  </div>
                 
                 <div className="container relative mx-auto px-4 pt-12 pb-24">
                         
                         <div className="flex flex-col items-center justify-center text-center z-10">
                                 
                                 <motion.div
                                     initial={{opacity:0, scale:0.5}}
                                     animate={{opacity:1, scale:1}}
                                     transition={{duration:0.8}}
                                     className="relative mb-8 mt-24"
                                 >
                                         <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
                                     <img
                                          className="w-[200px] relative z-10 h-[200px] rounded-full object-cover"
                                         src={akshat}
                                          alt="Akshat"
                         />
                                 </motion.div>
                                                       
                                 <motion.div
                                     initial={{opacity:0,y:20}}
                                     animate={{opacity:1,y:0}}
                                     transition={{duration:0.8}}
                                     className="max-w-4xl"
                                 >
                                         <h1 className="text-6xl md:text-8xl font-bold tracking-tighter pt-3 mb-4">
                                                <span className="py-10">Hi, I am</span>  <br /> Akshat <span className="text-emerald-400">Kandpal</span>
                                         </h1>
                              <p className="text-xl text-white/80 max-2-lg mx-auto leading-relaxed mb-6">
                          I'm a CSE student, React enthusiast, and part-time debugger. I speak Java fluently, flirt with DSA problems for fun, and occasionally win hackathons when the Wi-Fi behaves. Basically, I'm like the Michael Scott of coding — a little chaotic, strangely confident, but always getting things done... eventually.
                        </p>
                                <div className="flex gap-4 justify-center relative z-20">
                              {/* Option 1: Add relative z-20 and ensure pointer events */}
                              <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-emerald-500 rounded-full font-medium text-white hover:bg-emerald-600 transition-colors shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer relative z-10"
      style={{ pointerEvents: 'auto' }}
      onClick={redirect}
    >
      View Work
    </motion.button>

                              {/* Option 2: Alternative with regular button wrapped in motion.div */}
                              {/* 
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10"
                              >
                                <button 
                                  className="px-6 py-3 bg-emerald-500 rounded-full font-medium text-white hover:bg-emerald-600 transition-colors shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
                                  onClick={() => console.log('Button clicked!')}
                                >
                                  View Work
                                </button>
                              </motion.div>
                              */}
                        </div>
                                    </motion.div>
                         </div>
                     <motion.div
                animate={{
                    y:[0,15,0],
                }}
                transition={{
                    duration:3,
                    repeat:Infinity,
                    ease:"easeInOut"
                }}
                className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"
                >
                 </motion.div>
            </div>
         </div>
         </>
     );
}