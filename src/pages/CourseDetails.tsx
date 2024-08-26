import React from 'react';
import { useRouter } from 'next/router';

type Course = {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
};

const CourseDetails: React.FC = () => {
  const router = useRouter();
  const { courseId } = router.query;

  // Example data, replace with dynamic data fetching based on courseId
  const course: Course = {
    id: 'course-1',
    title: 'React for Beginners',
    description: 'Learn the basics of React, a popular JavaScript library for building user interfaces.',
    content: 'This is where the course content will go...',
    image: '/images/react-course.jpg',
  };

  if (courseId !== course.id) {
    return <p>Course not found</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold my-8">{course.title}</h1>
        <img className="w-full mb-8" src={course.image} alt={course.title} />
        <p className="text-xl mb-4">{course.description}</p>
        <div className="text-base text-gray-700">{course.content}</div>
      </div>
    </div>
  );
};

export default CourseDetails;
