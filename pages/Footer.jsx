import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
    return(
        <footer className="bg-black text-white py-16 px-8 relative overflow-hidden" id="contact">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-2xl"></div>
            
            <div className="container mx-auto relative z-10">
                <div className="flex items-center justify-between flex-col lg:flex-row gap-12">
                    
                    {/* Left side - Contact info */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="md:text-7xl text-5xl font-bold mb-6 text-white/90">
                             Get in <span className="text-emerald-400">touch</span>
                        </h2>
                        
                        <p className="text-white/70 text-lg mb-8 max-w-md">
                            Let's connect and build something amazing together. I'm always open to discussing new opportunities and interesting projects.
                        </p>
                        
                        <a
                            href="mailto:akshatkandpal840@gmail.com"
                            className="inline-block md:text-2xl text-xl font-semibold text-emerald-400 hover:text-emerald-300 transition-all duration-300 group"
                        >
                            <span className="border-b-2 border-emerald-400/50 hover:border-emerald-300 pb-1">
                                akshatkandpal840@gmail.com
                            </span>
                        </a>
                    </div>
                    
                    {/* Right side - Social links */}
                    <div className="flex-shrink-0">
                        <h3 className="text-xl font-semibold mb-6 text-center text-white/90">
                            Follow me
                        </h3>
                        <div className="flex gap-6 justify-center">
                            <a 
                                href="https://x.com/AkshatKan13364" 
                                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:scale-110 transition-all duration-300 group border border-white/20 hover:border-emerald-400/50"
                                aria-label="Twitter"
                            >
                                <FaXTwitter className="text-xl text-white/80 group-hover:text-emerald-400 transition-colors duration-300" />
                            </a>
                            <a 
                                href="https://www.instagram.com/akshat_kandpal/" 
                                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:scale-110 transition-all duration-300 group border border-white/20 hover:border-emerald-400/50"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-xl text-white/80 group-hover:text-emerald-400 transition-colors duration-300" />
                            </a>
                            <a 
                                href="https://github.com/Akshatk-star" 
                                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:scale-110 transition-all duration-300 group border border-white/20 hover:border-emerald-400/50"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl text-white/80 group-hover:text-emerald-400 transition-colors duration-300" />
                            </a>
                            <a 
                                href="https://leetcode.com/u/akshat_kandpal/" 
                                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:scale-110 transition-all duration-300 group border border-white/20 hover:border-emerald-400/50"
                                aria-label="LeetCode"
                            >
                                <SiLeetcode className="text-xl text-white/80 group-hover:text-emerald-400 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Bottom section */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © 2024 Akshat Kandpal. Crafted with ❤️ and lots of coffee.
                    </p>
                    <p className="text-white/50 text-sm">
                        Built with React,Tailwind CSS and Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
}