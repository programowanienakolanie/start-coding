import React from 'react';
import { Faq } from './Faq'; // Adjust the import path based on your file structure

const faqData = [
  {
    question: 'How do I get started with a project?',
    answer:
      'To get started with a project on Start-Coding, browse through the available projects categorized by difficulty, language, or technology. Select a project that aligns with your interests or skill level, and you can begin working on it immediately. Each project comes with a detailed description and any necessary resources or guidelines.',
  },
  {
    question: 'What kind of projects can I find on Start-Coding?',
    answer:
      'Start-Coding offers a wide range of projects covering various programming languages, technologies, and concepts like web development, data structures, machine learning, and more. Projects are also categorized by difficulty level, so you can find something that matches your skill level, whether youre a beginner or an advanced programmer.',
  },
  {
    question: 'Can I submit my own project ideas?',
    answer:
      'Yes, you can submit your own project ideas through a submission form on Start-Coding. Your idea will go through an approval process to ensure it meets our standards for practicality, educational value, and alignment with current technology trends. Once approved, your project will be made available to the entire community.',
  },
  {
    question:
      'Are there any prerequisites or skill requirements to participate?',
    answer:
      'Start-Coding caters to a wide range of skill levels, from beginners to advanced programmers. While there are no strict prerequisites, some projects might require familiarity with certain programming languages or concepts. You can select projects based on your current skill level and learning objectives.',
  },
  {
    question: 'Can I provide feedback or suggestions on projects?',
    answer:
      'Absolutely! After working on a project, you can post your solution, share insights, and provide feedback. You can also rate the project and write a review, discussing its difficulty, educational value, or any other aspect. Your feedback is crucial for improving the quality of projects and the overall learning experience on the platform.',
  },
];

export const FaqSection = () => {
  return (
    <div>
      <h1 className="text-4xl">FAQ</h1>
      <Faq questions={faqData} />
    </div>
  );
};
