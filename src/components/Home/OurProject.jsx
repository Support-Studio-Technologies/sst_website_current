import Image from "next/image";
import { motion } from "framer-motion";
import ProjectBG from "../../assets/Home/ProjectBG.svg";
import BGFILL from "../../assets/Home/BGFILL.svg";
import CustomButton from "../Cards/Button";

const OurProject = () => {
  const Card = ({ title, description, imageUrl, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="p-6 max-w-2xl mx-auto md:mx-4 my-4 flex flex-col items-center text-center w-full md:w-1/2"
      whileHover={{ scale: 1.03, y: -5 }}
whileTap={{ scale: 0.98 }}

    >
      <div className="w-full relative h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between items-center bg-black/40 text-white px-6 py-6">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">{title}</h3>
            <p className="text-base sm:text-lg md:text-lg">{description}</p>
          </div>

          <div className="w-full flex justify-end">
            <CustomButton
              text={"Explore"}
              iconColor="text-white"
              iconBgColor="bg-black hover:bg-gray-800"
              buttonBgColor="bg-white"
              textColor="text-black"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      style={{
        backgroundImage: `url(${BGFILL.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[30px]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center py-6 px-4 w-full overflow-x-hidden overflow-hidden"
      >
        {/* Header */}
        <div className="text-center lg:mb-5 mb-3">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 text-sm font-medium tracking-wider uppercase"
          >
            <span className="text-blue-500 mr-2">✦</span> What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl lg:text-6xl xl:text-4xl font-normal leading-tight mt-4"
          >
            <span className="text-gray-900">Services That Drive </span>
            <span className="gradient-text">Transformation</span>
          </motion.h1>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch max-w-5xl">
          <Card
            title="Enterprise Services"
            description="Comprehensive enterprise services across SAP, Microsoft, Salesforce, and Cloud designed to simplify operations, integrate processes, and accelerate business growth."
            imageUrl={ProjectBG}
            delay={0.2}
          />
          <Card
            title="Digital Solutions"
            description="Future-ready solutions in E-Invoicing, Cybersecurity, and emerging technologies that modernize enterprises and prepare them for the digital age."
            imageUrl={ProjectBG}
            delay={0.4}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OurProject;
