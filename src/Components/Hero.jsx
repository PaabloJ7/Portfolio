import React from 'react'
import { motion } from 'framer-motion'

const Hero  = () => {
    return (
        <div  id="Sobremi" className="grid items-center min-h-screen md:grid-cols-4 gap-8 px-4 mx-auto max-w-screen-xl ">
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
                    className=" mb-2 text-4xl font-extrabold tracking-tight text-transparent  lg:text-7xl">
                    Hola! 👋 Soy Pablo.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6 text-2xl font-bold tracking-tight lg:text-4xl">
                        
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
                    Me considero una persona con una buena visión de negocio y capacidad para entender las necesidades del usuario, lo que me permite desarrollar soluciones funcionales, eficientes y escalables.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                >
                    <a
                        href="mailto:pablodelasierra7@gmail.com"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-mi-verde rounded-lg border-2 border-mi-verde hover:scale-105 hover:text-white ">
                        Contáctame
                        <i class="ml-2 fa-regular fa-envelope"></i>
                    </a>
                    
                    <a href="/images/CV_Pablo_de_la_Sierra.pdf" target="_blank" rel="noopener noreferrer"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-mi-verde rounded-lg border-2 border-mi-verde hover:scale-105 hover:text-white">
                    Ver Curriculum
                    <i className="ml-2 fa-regular fa-file"></i>
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
                            <img src="/images/Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS"
                                className=" transition-transform duration-300 group-hover:scale-145 w-18 h-11" />
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
                    </div>
                </motion.div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative h-[500px] w-full md:col-span-1"
            >
                {/* Ventana flotante 1 */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-10 right-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 transform -rotate-3"
                >
                    <div className="flex gap-1.5 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </motion.div>

                {/* Ventana flotante 2 */}
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -2, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute top-40 right-10 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 transform rotate-3"
                >
                    <div className="flex gap-1.5 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-full h-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </motion.div>

                {/* Ventana flotante 3 */}
                <motion.div
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [2, -2, 2]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-80 right-5 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3"
                >
                    <div className="flex gap-1.5 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-full h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero