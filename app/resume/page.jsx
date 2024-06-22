"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaNode,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//About data
const about = {
    title: "Sobre mi",
    description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eius in, quibusdam numquam ipsum atque velit minus ullam voluptates architecto deleniti.",
    info: [
        {
            fieldName: "Nombre",
            fieldValue: "Hernan Donatelli",
        },
        {
            fieldName: "Movil",
            fieldValue: "(+54) 11 5041.4022",
        },
        {
            fieldName: "Experiencia",
            fieldValue: "+7 años",
        },
        {
            fieldName: "Nacionalidad",
            fieldValue: "Argentino",
        },
        {
            fieldName: "Email",
            fieldValue: "hernandonatelli@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Disponible",
        },
    ],
};

//Experience data
const experience = {
    icon: "assets/resume/badge.svg",
    title: "Mi Experiencia",
    description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eius in, quibusdam numquam ipsum atque velit minus ullam voluptates architecto deleniti.",
    items: [
        {
            company: "Studioatlantic",
            position: "Frontend Developer",
            date: "2022 - Actual",
        },
        {
            company: "Fulcro",
            position: "Fullstack Developer",
            date: "2020 - 2022",
        },
        {
            company: "Paretto",
            position: "Frontend Developer",
            date: "2015 - 2019",
        },
        {
            company: "Paretto",
            position: "Frontend Developer",
            date: "2015 - 2019",
        },
        {
            company: "Paretto",
            position: "Frontend Developer",
            date: "2015 - 2019",
        },
    ],
};

//Education data
const education = {
    icon: "assets/resume/cap.svg",
    title: "Mis Estudios",
    description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eius in, quibusdam numquam ipsum atque velit minus ullam voluptates architecto deleniti.",
    items: [
        {
            institute: "Coderhouse",
            title: "React.js - Frontend Developer",
            date: "2024",
        },
        {
            institute: "Coderhouse",
            title: "Vue.js - Frontend Developer",
            date: "2023",
        },
        {
            institute: "Coderhouse",
            title: "Desarrollador Frontend Javascript",
            date: "2021",
        },
        {
            institute: "Udemy",
            title: "Fullstack Developer (MEVN)",
            date: "2020",
        },
        {
            institute: "Educacion IT",
            title: "Programador PHP",
            date: "2017",
        },
        {
            institute: "Escuela DaVinci",
            title: "Desarrollador Web",
            date: "2012",
        },
    ],
};

//Skills data
const skills = {
    title: "Mis Habilidades",
    description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eius in, quibusdam numquam ipsum atque velit minus ullam voluptates architecto deleniti.",
    skillList: [
        {
            name: "html5",
            icon: <FaHtml5 />,
        },
        {
            name: "css3",
            icon: <FaCss3 />,
        },
        {
            name: "javascript",
            icon: <FaJs />,
        },
        {
            name: "react",
            icon: <FaReact />,
        },
        {
            name: "tailwindcss",
            icon: <SiTailwindcss />,
        },
        {
            name: "next.js",
            icon: <SiNextdotjs />,
        },
        {
            name: "node.js",
            icon: <FaNodeJs />,
        },
        {
            name: "figma",
            icon: <FaFigma />,
        },
    ],
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experiencia"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experiencia">
                            Experiencia
                        </TabsTrigger>
                        <TabsTrigger value="educacion">Educación</TabsTrigger>
                        <TabsTrigger value="habilidades">
                            Habilidades
                        </TabsTrigger>
                        <TabsTrigger value="sobre">Sobre Mi</TabsTrigger>
                    </TabsList>

                    {/* contenido */}
                    <div className="min-h-[70vh] w-full">
                        {/* experiencia */}
                        <TabsContent value="experiencia" className="w-full">
                            <div className="flex flex-col gap-[30px] xl:text-left">
                                <h3 className="text-3xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-purple-400">
                                                        {item.date}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-purple-400"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* educacion */}
                        <TabsContent value="educacion" className="w-full">
                            <div className="flex flex-col gap-[30px] xl:text-left">
                                <h3 className="text-3xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-purple-400">
                                                        {item.date}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.title}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-purple-400"></span>
                                                        <p className="text-white/60">
                                                            {item.institute}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Habilidades */}
                        <TabsContent
                            value="habilidades"
                            className="w-full h-full"
                        >
                            <div className="flex flex-col gap-[30px] xl:text-left">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-3xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="group w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                                            <div className="text-6xl group-hover:text-purple-500 transition-all duration-200">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="sobre" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                              <h3 className="text-3xl font-bold">
                                {about.title}
                              </h3>
                              <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                                {about.description}
                              </p>
                              <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="flex items-center justify-center xl:justify-start gap-4"
                                    >
                                      <span className="text-white/60">{item.fieldName}</span>
                                      <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
