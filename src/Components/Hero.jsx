import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="grid items-center min-h-screen md:grid-cols-4 gap-8 px-4 mx-auto max-w-screen-xl ">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left py-8 lg:pl-2 md:col-span-3"
            >
                <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-2 text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-mi-verde to-mi-azul bg-clip-text text-transparent md:text-6xl lg:text-7xl"
                >
                    Hola! 👋 Soy Pablo.
                </motion.h1>

                <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6 text-2xl font-bold tracking-tight leading-none bg-gradient-to-r from-mi-verde to-mi-azul bg-clip-text text-transparent md:text-3xl lg:text-4xl"
                >
                    Desarrollador Full-Stack JR
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-9 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
                >
                    Desarrollador Web Junior con conocimientos en Frontend y Backend,
                    actualmente en busqueda de oportunidades en el mundo del desarrollo web.
                    <br />
                    Motivado por aprender y mejorar continuamente. Mi enfoque principal es el
                    Frontend, ya que me entusiasma construir interfaces interactivas y modernas
                    que mejoran la experiencia del usuario.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                >
                    <a
                        href="mailto:tucorreo@ejemplo.com"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-mi-verde rounded-lg border-2 border-mi-verde hover:bg-mi-verde hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Contáctame
                        <svg
                            className="w-5 h-5 ms-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                    </a>
                    <a
                        href="../assets/CV_Pablo_Sierra.pdf"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-mi-verde rounded-lg border-2 border-mi-verde hover:bg-mi-verde hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Ver Curriculum
                        <svg
                            className="w-5 h-5 ms-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                        </svg>
                    </a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12"
                >
                    <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">Tecnologías</h3>
                    <div className="flex flex-wrap gap-4">
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">HTML5</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">CSS3</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">JavaScript</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">PHP</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">MySQL</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Git</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">React</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" alt="Symfony" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Symfony</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145 dark:invert" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Tailwind</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Node.js</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" 
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-145" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Docker</span>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
            <div className="py-8 md:col-span-1">
            </div>
        </div>
    )
}

export default Hero