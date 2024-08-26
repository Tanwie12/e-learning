import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  isFree: boolean;
  category: string;
  location: string;
};

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    isFree: '',
    category: '',
    location: '',
  });

  const courses: Course[] = [
    {
      id: 'course-1',
      title: 'Watercolor Painting',
      description: 'Learn the art of watercolor painting from basics to advanced techniques.',
      image: '/images/watercolor.jpg',
      isFree: false,
      category: 'Painting',
      location: 'Online',
    },
    {
      id: 'course-2',
      title: 'Sculpting for Beginners',
      description: 'Get hands-on experience with basic sculpting techniques.',
      image: '/images/sculpting.jpg',
      isFree: true,
      category: 'Sculpting',
      location: 'Offline',
    },
    // Add more courses here
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFree = filter.isFree === '' || (filter.isFree === 'free' && course.isFree) || (filter.isFree === 'paid' && !course.isFree);
    const matchesCategory = filter.category === '' || course.category === filter.category;
    const matchesLocation = filter.location === '' || course.location === filter.location;

    return matchesSearch && matchesFree && matchesCategory && matchesLocation;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
      <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#000000' }}>Explore Our Courses</h1>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md p-2 w-full sm:w-1/2 mb-4 sm:mb-0"
          style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
        />

        <div className="flex flex-wrap gap-4">
          <select
            name="isFree"
            value={filter.isFree}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md p-2"
            style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
          >
            <option value="">All Courses</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          <select
            name="category"
            value={filter.category}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md p-2"
            style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
          >
            <option value="">All Categories</option>
            <option value="Painting">Painting</option>
            <option value="Sculpting">Sculpting</option>
            <option value="Photography">Photography</option>
            <option value="Drawing">Drawing</option>
            {/* Add more categories as needed */}
          </select>

          <select
            name="location"
            value={filter.location}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md p-2"
            style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
          >
            <option value="">All Locations</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            {/* Add more locations as needed */}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.slice(0, 15).map((course) => (
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

export default HomePage;
