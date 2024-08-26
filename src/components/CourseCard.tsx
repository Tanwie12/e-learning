import React from 'react';
import Link from 'next/link';

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/courses/${id}`}>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Course
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
