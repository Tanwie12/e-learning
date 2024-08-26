import React from 'react';
import { useRouter } from 'next/router';

type Lesson = {
  id: string;
  title: string;
};

type CourseProgress = {
  courseId: string;
  completedLessons: string[];
};

const CourseProgress: React.FC = () => {
  const router = useRouter();
  const { courseId } = router.query;

  const course: { id: string; title: string; lessons: Lesson[] } = {
    id: 'course-1',
    title: 'React for Beginners',
    lessons: [
      { id: 'lesson-1', title: 'Introduction to React' },
      { id: 'lesson-2', title: 'React Components' },
    ],
  };

  const courseProgress: CourseProgress = {
    courseId: 'course-1',
    completedLessons: ['lesson-1'],
  };

  const totalLessons = course.lessons.length;
  const completedLessons = courseProgress.completedLessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold my-8">Course Progress: {course.title}</h1>
        <p className="text-xl mb-4">You have completed {completedLessons} out of {totalLessons} lessons.</p>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <ul>
          {course.lessons.map((lesson) => (
            <li key={lesson.id} className="mb-2">
              <span className={courseProgress.completedLessons.includes(lesson.id) ? 'text-green-600' : 'text-gray-600'}>
                {lesson.title} {courseProgress.completedLessons.includes(lesson.id) ? '✓' : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseProgress;
