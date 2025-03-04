'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const primaryColor = "#2563eb"; // Blue-600
const secondaryColor = "#1e40af"; // Blue-700
const textColor = "#ffffff"; // White
const progressBarBg = "#3b82f6"; // Blue-500

// Variants for the progress bar animation
const progressVariants = {
    initial: { width: "0%" },
    animate: (level) => ({
        width: `${level}%`,
        transition: { duration: 1.5, ease: "easeOut" },
    }),
    hover: {
        scale: 1.02,
        transition: { duration: 0.3 },
    },
};

export default function Home() {
    const skills = [
        { skill: "Python", level: 90 },
        { skill: "React JS", level: 85 },
        { skill: "Java", level: 80 },
        { skill: "Spring", level: 75 },
        { skill: "PHP", level: 70 },
        { skill: "Symfony", level: 65 },
        { skill: "SQL", level: 60 },
    ];

    const experiences = [
        {
            title: "Free-lance Développeur Web - Concepteur IA",
            date: "Depuis Décembre 2019",
            description:
                "Développement de sites web, applications mobiles, chatbots et IA pour divers clients.",

        },
        {
            title: "Chercheur en Intelligence Artificielle",
            date: "Janvier 2022 - Octobre 2024",
            description:
                "Utilisation des CNN, LSTM et LLM pour la détection de maladies sur des images médicales de tympans.",
        },
        {
            title: "My Medical Assistant",
            date: "Depuis Juillet 2018",
            description:
                "Développement de iAudiogram, plateforme de télé-audiométrie et gestion patient-médecin.",
        },
        {
            title: "Junior ISEP",
            date: "Avril 2018 - Mars 2019",
            description:
                "Développement du site en Spring, React JS, HTML, CSS.",
        },
    ];

    const publications = [
        {
            title:
                "Multilabel Classification of Otoscopy Images in Deep Learning for Detailed Assessment of Eardrum Condition",
            type: "Conference Paper",
            date: "January 2025",
            authors: [
                "Antoine Perry",
                "Ilaria Renna",
                "Florence Rossant",
                "Nicolas Wallaert",
            ],
            extra: [
                "Occlusion and masking effects for BC forehead audiometry.",
                "Occlusion and masking effects for BC mastoid audiometry.",
                "Manual and automated measures of BC and AC audiometry.",
                "Manual and automated measures of air-bone gaps (ABG).",
                "Test-retest BC thresholds measured with ML-audiometer.",
                "+14",
            ],
        },
        {
            title:
                "Performance and Reliability Evaluation of an Automated Bone-Conduction Audiometry Using Machine Learning",
            type: "Article",
            linkText: "Full-text available",
            date: "November 2024",
            reads: "45 Reads",
            citations: "1 Citation",
            journal: "Trends in Hearing",
            authors: [
                "Nicolas Wallaert",
                "Antoine Perry",
                "Hadrien Jean",
                "Nihaad Paraouty",
            ],
            abstract:
                "To date, pure-tone audiometry remains the gold standard for clinical auditory testing. However, pure-tone audiometry is time-consuming and only provides a discrete estimate of hearing acuity. Here, we aim to address these two main drawbacks by developing a machine learning (ML)-based approach for fully automated bone-conduction (BC) audiometry tests with forehead vibrator placement. Study 1 examines the occlusion effects when the headphones are positioned on both ears during BC forehead testing. Study 2 describes the ML-based approach for BC audiometry, with automated contralateral masking rules, compensation for occlusion effects and forehead-mastoid corrections. Next, the performance of ML-audiometry is examined in comparison to manual and conventional BC audiometry with mastoid placement. Finally, Study 3 examines the test-retest reliability of ML-audiometry. Our results show no significant performance difference between automated ML-audiometry and manual conventional audiometry. High test-retest reliability is achieved with the automated ML-audiometry. Together, our findings demonstrate the performance and reliability of the automated ML-based BC audiometry for both normal-hearing and hearing-impaired adult listeners with mild to severe hearing losses.",
        },
        {
            title:
                "Performance and reliability evaluation of an improved machine learning‐based pure‐tone audiometry with automated masking",
            type: "Article",
            linkText: "Full-text available",
            date: "September 2024",
            reads: "63 Reads",
            citations: "2 Citations",
            journal:
                "World Journal of Otorhinolaryngology - Head and Neck Surgery",
            authors: [
                "Nicolas Wallaert",
                "Antoine Perry",
                "Sandra Quarino",
                "Nihaad Paraouty",
            ],
            abstract:
                "Objective Automated air‐conduction pure‐tone audiograms through Bayesian estimation and machine learning (ML) classification have recently been proposed in the literature. Although such ML‐based audiometry approaches represent a significant addition to the field, they remain unsuited for daily clinical settings...",
        },
    ];

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 relative overflow-hidden"
            style={{ color: textColor }}
        >
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/lake.jpg')",
                    filter: "brightness(0.3)",
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-5xl p-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-90 backdrop-blur-lg"
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
                    <p className="text-xl mt-2 text-gray-400">
                        Ingénieur Full Stack - Intelligence Artificielle
                    </p>
                </motion.div>

                {/* Two-Column Layout with Responsive Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side */}
                    <div>
                        {/* Contact */}
                        <h2 className="text-xl font-semibold mb-3">📞 Contact</h2>
                        <p className="text-gray-300">+33 6 74 18 13 95</p>
                        <p className="text-gray-300">contact@antoineperry.fr</p>

                        {/* Outils */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">🛠 Outils</h2>
                        <p>Git, GitHub, JetBrains Soft, Postman, Atom, Photoshop, Lightroom</p>

                        {/* Centres d'intérêts */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">
                            🎵 Centres d&apos;intérêts
                        </h2>
                        <p>Guitare, Batterie, Boxe, Cross-training, Course à pied</p>

                        {/* Skills with Animated Progress Bars */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">💻 Compétences</h2>
                        {skills.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-sm font-semibold">{item.skill}</p>
                                    <p className="text-xs text-gray-400">{item.level}%</p>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                                    <motion.div
                                        className="h-4 rounded-full"
                                        style={{ backgroundColor: progressBarBg }}
                                        custom={item.level}
                                        variants={progressVariants}
                                        initial="initial"
                                        animate="animate"
                                        whileHover="hover"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Languages with Icons */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">🌍 Langues</h2>
                        <p>🇫🇷 Français - Langue maternelle</p>
                        <p>🇬🇧 Anglais - Niveau Courant (TOEIC 895)</p>
                        <p>🇪🇸 Espagnol - Niveau Opérationnel</p>
                        <p>🇯🇵 Japonais - Notions</p>
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* Experience */}
                        <h2 className="text-xl font-semibold mb-3">🚀 Expérience</h2>
                        {experiences.map((job, index) => (
                            <motion.div
                                key={index}
                                className="mb-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-lg font-semibold">{job.title}</h3>
                                <p className="text-gray-400 text-sm">{job.date}</p>
                                <p className="text-sm mt-1">{job.description}</p>
                            </motion.div>
                        ))}

                        {/* Education */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">🎓 Formation</h2>
                        <p>
                            <strong>Cycle Ingénieur Spécialité Logiciel</strong> - ISEP Paris
                            (2017-2020)
                        </p>
                        <p>
                            <strong>Spécialisation Sécurité Informatique</strong> - Chalmers
                            University, Suède (2020)
                        </p>

                        {/* Publications */}
                        <h2 className="text-xl font-semibold mt-6 mb-3">🏆 Publications</h2>
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                className="mb-6 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-lg font-semibold">{pub.title}</h3>
                                <p className="text-gray-400 text-sm">
                                    {pub.type} • {pub.date}
                                </p>
                                <p className="text-sm mt-1">
                                    <strong>Auteurs:</strong> {pub.authors.join(", ")}
                                </p>
                                {pub.journal && (
                                    <p className="text-sm mt-1">
                                        <strong>Revue:</strong> {pub.journal}
                                    </p>
                                )}
                                {(pub.reads || pub.citations) && (
                                    <p className="text-xs text-gray-400 mt-1">
                                        {pub.reads} {pub.citations && " • " + pub.citations}
                                    </p>
                                )}
                                {pub.linkText && (
                                    <p className="text-xs text-blue-300 mt-1 underline cursor-pointer">
                                        {pub.linkText}
                                    </p>
                                )}
                                {pub.extra && (
                                    <ul className="list-disc list-inside mt-2 text-xs text-gray-300">
                                        {pub.extra.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {pub.abstract && (
                                    <p className="text-xs text-gray-300 mt-2 line-clamp-3">
                                        {pub.abstract}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
