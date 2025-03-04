"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    SiPython,
    SiReact,
    SiSpring,
    SiPhp,
    SiSymfony,
    SiMysql,
    SiJavascript,
    SiDocker,
    SiKubernetes,
    SiTensorflow,
    SiPytorch,
} from "react-icons/si";

const primaryColor = "#2563eb"; // Blue-600
const secondaryColor = "#1e40af"; // Blue-700
const textColor = "#ffffff"; // White

export default function Home() {
    const skills = [
        { skill: "Python", level: 90, icon: <SiPython size={30} /> },
        { skill: "React JS", level: 85, icon: <SiReact size={30} /> },
        { skill: "React Native", level: 80, icon: <SiReact size={30} /> },
        { skill: "Spring", level: 60, icon: <SiSpring size={30} /> },
        { skill: "PHP", level: 70, icon: <SiPhp size={30} /> },
        { skill: "Symfony", level: 65, icon: <SiSymfony size={30} /> },
        { skill: "SQL", level: 60, icon: <SiMysql size={30} /> },
        { skill: "JavaScript", level: 90, icon: <SiJavascript size={30} /> },
        { skill: "Docker", level: 80, icon: <SiDocker size={30} /> },
        { skill: "Kubernetes", level: 65, icon: <SiKubernetes size={30} /> },
        { skill: "TensorFlow", level: 80, icon: <SiTensorflow size={30} /> },
        { skill: "PyTorch", level: 70, icon: <SiPytorch size={30} /> },
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
            link: "/Multilabel Classification of Otoscopy Images.pdf",
        },
        {
            title:
                "Performance and Reliability Evaluation of an Automated Bone-Conduction Audiometry Using Machine Learning",
            type: "Article",
            linkText: "Full-text available",
            date: "November 2024",
            reads: "45 Reads",
            citations: "1 Citation",
            link: "/Performance_and_Reliability_Evaluation_of_an_Autom.pdf",
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
            link: "/Performance_and_reliability_evaluation_of_an_impro.pdf",
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

    const handleExport = () => {
        window.print();
    };

    return (
        <div className="printable">
            {/* Global print styles */}
            <style jsx global>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .printable, .printable * {
                        visibility: visible;
                    }
                    .printable {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 210mm;
                        height: 297mm;
                        /* Adjust padding and margins as needed */
                    }
                    /* Optionally hide the export button when printing */
                    .no-print {
                        display: none;
                    }
                }
            `}</style>
            <div
                className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 relative overflow-hidden"
                style={{ color: textColor }}
            >
                {/* Export Button */}
                <div className="absolute top-4 right-4 no-print">
                    <button
                        onClick={handleExport}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Export PDF
                    </button>
                </div>

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
                            <p className="text-gray-300">
                                <a href="tel:+33674181395" className="underline hover:text-blue-400 transition duration-300">
                                    +33 6 74 18 13 95
                                </a>
                            </p>
                            <p className="text-gray-300">
                                <a href="mailto:contact@antoineperry.fr" className="underline hover:text-blue-400 transition duration-300">
                                    contact@antoineperry.fr
                                </a>
                            </p>

                            {/* Outils */}
                            <h2 className="text-xl font-semibold mt-6 mb-3">🛠 Outils</h2>
                            <p>Git, GitHub, JetBrains Soft, Postman, Atom, Photoshop, Lightroom</p>

                            {/* Centres d'intérêts */}
                            <h2 className="text-xl font-semibold mt-6 mb-3">
                                🎵 Centres d&apos;intérêts
                            </h2>
                            <p>Guitare, Batterie, Boxe, Cross-training, Course à pied</p>

                            {/* Skills without Progress Bars */}
                            <h2 className="text-xl font-semibold mt-6 mb-3">💻 Compétences</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center p-3 bg-gray-800 rounded-lg shadow transition transform hover:scale-105"
                                    >
                                        <div className="mr-3">{item.icon}</div>
                                        <p className="text-sm font-semibold">{item.skill}</p>
                                    </motion.div>
                                ))}
                            </div>

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
                            <p>
                                <strong>Doctorat en Intelligence Artificielle</strong> - ISEP Paris
                                (2022-2024)
                            </p>

                            {/* Publications */}
                            <h2 className="text-xl font-semibold mt-6 mb-3">🏆 Publications</h2>
                            {publications.map((pub, index) => (
                                <motion.div key={index} className="mb-6 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300" whileHover={{ scale: 1.02 }}>
                                    <h3 className="text-lg font-semibold">{pub.title}</h3>
                                    <p className="text-gray-400 text-sm">{pub.type} • {pub.date}</p>
                                    <p className="text-sm mt-1"><strong>Auteurs:</strong> {pub.authors.join(", ")}</p>
                                    {pub.journal && <p className="text-sm mt-1"><strong>Revue:</strong> {pub.journal}</p>}
                                    <a href={pub.link} className="text-xs text-blue-300 mt-1 underline cursor-pointer" target="_blank" rel="noopener noreferrer">Full-text available</a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
