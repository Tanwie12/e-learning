import React, { useState } from 'react';

type EnrollButtonProps = {
  courseId: string;
};

const EnrollButton: React.FC<EnrollButtonProps> = ({ courseId }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnrollment = async () => {
    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId }),
      });

      if (response.ok) {
        setIsEnrolled(true);
      }
    } catch (error) {
      console.error('Enrollment failed', error);
    }
  };

  return (
    <button
      onClick={handleEnrollment}
      className={`${
        isEnrolled ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700'
      } text-white font-bold py-2 px-4 rounded`}
      disabled={isEnrolled}
    >
      {isEnrolled ? 'Enrolled' : 'Enroll Now'}
    </button>
  );
};

export default EnrollButton;
