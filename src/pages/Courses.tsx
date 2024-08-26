import React from 'react';
import CourseCard from '../components/CourseCard';

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const Courses: React.FC = () => {
  // Example data, replace with your dynamic data fetching logic
  const courses: Course[] = [
    {
      id: 'course-1',
      title: 'React for Beginners',
      description: 'Learn the basics of React, a popular JavaScript library for building user interfaces.',
      image: '/images/react-course.jpg',
    },
    {
      id: 'course-2',
      title: 'Advanced TypeScript',
      description: 'Deep dive into TypeScript with advanced types and practical applications.',
      image: '/images/typescript-course.jpg',
    },
    // Add more courses as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
