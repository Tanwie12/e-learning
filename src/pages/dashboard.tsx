import React from "react";
import Link from "next/link";

type Course = {
  id: string;
  title: string;
  description: string;
};

const UserDashboard: React.FC = () => {
  const enrolledCourses: Course[] = [
    {
      id: "course-1",
      title: "React for Beginners",
      description:
        "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    },
    {
      id: "course-2",
      title: "Advanced TypeScript",
      description:
        "Deep dive into TypeScript with advanced types and practical applications.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">My Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <Link
              href={`/courses/${course.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Continue Course
            </Link>
            <Link
              href={`/courses/${course.id}/progress`}
              className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              View Progress
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
