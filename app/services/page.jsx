"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
    {
        num: "01",
        title: "Desarrollo Web",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repellat magni necessitatibus sapiente amet, maiores.",
        href: "",
    },
    {
        num: "02",
        title: "Diseño UI/UX",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repellat magni necessitatibus sapiente amet, maiores.",
        href: "",
    },
    {
        num: "03",
        title: "Consumo de API's",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repellat magni necessitatibus sapiente amet, maiores.",
        href: "",
    },
    {
        num: "04",
        title: "SEO",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repellat magni necessitatibus sapiente amet, maiores.",
        href: "",
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 0.4,
                            ease: "easeIn",
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                className="flex-1 flex flex-col justify-center gap-6 group"
                                key={index}
                            >
                                {/* Top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-purple-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* Title */}
                                <h2 className="text-[42px] font-bold text-white leading-none group-hover:text-purple-400 transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* Description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* Border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
