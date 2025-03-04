'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const primaryColor = "#2563eb"; // Blue-600
const secondaryColor = "#1e40af"; // Blue-700
const textColor = "#ffffff"; // White
const progressBarBg = "#3b82f6"; // Blue-500

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-10 relative overflow-hidden"
            style={{ color: textColor }}
        >
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/lake.jpg')", filter: "brightness(0.3)" }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>

            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-5xl p-10 rounded-lg shadow-lg bg-gray-900 bg-opacity-90 backdrop-blur-lg"
            >
                {/* Header with Image */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-10"
                >
                    <Image
                        src="/profile.jpg"
                        alt="Antoine Perry"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                    <h1 className="text-5xl font-bold mt-4">Antoine Perry</h1>
                    <p className="text-xl mt-2 text-gray-400">Ingénieur Full Stack</p>
                </motion.div>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Side */}
                    <div>
                        {/* Contact */}
                        <h2 className="text-xl font-semibold mb-3">📞 Contact</h2>
                        <p className="text-gray-300">+33 6 74 18 13 95</p>
                        <p className="text-gray-300">contact@antoineperry.fr</p>

                        {/* Skills with Animated Progress Bars */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">💻 Compétences</h2>
                        {[
                            { skill: "Python", level: 90 },
                            { skill: "React JS", level: 85 },
                            { skill: "Java", level: 80 },
                            { skill: "Spring", level: 75 },
                            { skill: "PHP", level: 70 },
                            { skill: "Symfony", level: 65 },
                            { skill: "SQL", level: 60 },
                        ].map((item, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-sm font-semibold">{item.skill}</p>
                                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                    <motion.div
                                        className="h-3 rounded-full"
                                        style={{ backgroundColor: progressBarBg }}
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${item.level}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                                    ></motion.div>
                                </div>
                            </div>
                        ))}

                        {/* Languages */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">🌍 Langues</h2>
                        <p>🇬🇧 Anglais - Niveau Courant (TOEIC 895)</p>
                        <p>🇪🇸 Espagnol - Niveau Opérationnel</p>
                        <p>🇯🇵 Japonais - Notions</p>
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* Experience */}
                        <h2 className="text-xl font-semibold mb-3">🚀 Expérience</h2>
                        {[{
                            title: "My Medical Assistant",
                            date: "Depuis Juillet 2018",
                            description: "Développement de iAudiogram, plateforme de télé-audiométrie et gestion patient-médecin."
                        }, {
                            title: "Junior ISEP",
                            date: "Avril 2018 - Mars 2019",
                            description: "Développement du site en Spring, React JS, HTML, CSS."
                        }].map((job, index) => (
                            <motion.div
                                key={index}
                                className="mb-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-lg font-semibold">{job.title}</h3>
                                <p className="text-gray-400 text-sm">{job.date}</p>
                                <p className="text-sm">{job.description}</p>
                            </motion.div>
                        ))}

                        {/* Education */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">🎓 Formation</h2>
                        <p><strong>Cycle Ingénieur Spécialité Logiciel</strong> - ISEP Paris (2017-2020)</p>
                        <p><strong>Spécialisation Sécurité Informatique</strong> - Chalmers University, Suède (2020)</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
