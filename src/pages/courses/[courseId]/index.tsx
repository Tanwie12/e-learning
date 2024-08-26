import React, { useState } from 'react';
import { useRouter } from 'next/router';
import EnrollButton from '../../../components/EnrollButton';

type Lesson = {
  id: string;
  title: string;
  content: string;
};

type Course = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

const CourseContent: React.FC = () => {
  const router = useRouter();
  const { courseId } = router.query;

  const course: Course = {
    id: 'course-1',
    title: 'React for Beginners',
    description: 'Learn the basics of React, a popular JavaScript library for building user interfaces.',
    lessons: [
      { id: 'lesson-1', title: 'Introduction to React', content: 'Lesson content goes here...' },
      { id: 'lesson-2', title: 'React Components', content: 'Lesson content goes here...' },
    ],
  };

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const handleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) => [...prev, lessonId]);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold my-8">{course.title}</h1>
        <p className="text-xl mb-4">{course.description}</p>

        <EnrollButton courseId={course.id} />

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Course Content</h2>
          <ul>
            {course.lessons.map((lesson) => (
              <li key={lesson.id} className="mb-4">
                <h3 className="text-2xl font-bold">{lesson.title}</h3>
                <p className="text-gray-700">{lesson.content}</p>
                <button
                  onClick={() => handleLessonCompletion(lesson.id)}
                  className={`${
                    completedLessons.includes(lesson.id) ? 'bg-green-500' : 'bg-gray-500 hover:bg-gray-700'
                  } text-white font-bold py-2 px-4 rounded mt-2`}
                >
                  {completedLessons.includes(lesson.id) ? 'Completed' : 'Mark as Complete'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
