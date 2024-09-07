'use client'
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="font-sans">
      {/* Features Section */}
      <motion.section
        className="bg-gray-50 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="container mx-auto text-center">
          <motion.h2 className="text-3xl font-semibold mb-12" variants={textVariant}>
            <span className="bg-gradient-to-r font-bold from-blue-500 to-teal-400 bg-clip-text text-transparent">YouDesign</span> brings all your creativity together
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: '/ai.png', title: 'AI Page Builder', description: 'Build faster with AI-powered tools.' },
              { src: '/customize.png', title: 'Easy to Customize', description: 'Customizable templates to match your needs.' },
              { src: '/devices.png', title: 'Fits Any Device', description: 'Fully responsive and ready for mobile devices.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={sectionVariant}
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.img
                  src={feature.src}
                  alt={feature.title}
                  className="mx-auto mb-4 w-28"
                  variants={imageVariant}
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Build Anything Section */}
      <motion.section
        className="bg-white py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Illustration */}
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            variants={imageVariant}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src="/features.svg" alt="Feature Illustration" className="w-full h-96" />
          </motion.div>
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={textVariant}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6">Build anything, anytime!</h2>
            <p className="text-lg mb-6">
              <span className="bg-gradient-to-r font-bold from-blue-500 to-teal-400 bg-clip-text text-transparent">YouDesign</span> makes it simple to build, update, and launch your site. Fully integrated with various tools to boost your productivity.
            </p>
            <blockquote className="italic text-gray-500 mb-4">
              &quot;YouDesign has completely transformed how we manage our sites!&quot; - James Dean, CTO, Panda
            </blockquote>
          </motion.div>
        </div>
      </motion.section>

      {/* How it Works Section */}
      <motion.section
        className="bg-gray-50 py-16 px-4 border-gray-300 border-[1px] rounded-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="container mx-auto text-center">
          <motion.h2 className="text-4xl font-semibold mb-12" variants={textVariant}>
            How  <span className="bg-gradient-to-r font-bold from-blue-500 to-teal-400 bg-clip-text text-transparent">YouDesign</span> works for you?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: '/tools.svg', title: 'Get started with designYou', description: 'Sign up and customize your website.' },
              { src: '/ai.svg', title: 'Build your website', description: 'Use our tools to create a perfect website in minutes.' },
              { src: '/publish.svg', title: 'Publish when finished', description: 'Launch your site and go live to the world!' },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={sectionVariant}
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.img
                  src={step.src}
                  alt={step.title}
                  className="mx-auto mb-4 w-16"
                  variants={imageVariant}
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
