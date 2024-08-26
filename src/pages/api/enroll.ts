import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { courseId } = req.body;

    // Example logic, replace with actual database operations
    console.log(`Enrolling user in course: ${courseId}`);

    res.status(200).json({ message: 'Enrollment successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
