import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-8">Welcome to Our E-Learning Platform</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore a wide range of courses designed to help you achieve your learning goals.
        </p>
        <Link href="/courses" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg">
            Browse Courses
        </Link>
      </div>
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry experts with years of experience in their fields.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Flexible Learning</h3>
            <p className="text-gray-600">
              Access courses on your own schedule, from any device, anywhere in the world.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Affordable Pricing</h3>
            <p className="text-gray-600">
              Gain valuable skills without breaking the bank with our competitive pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
