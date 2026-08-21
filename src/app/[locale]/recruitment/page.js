import { prisma } from '@/lib/prisma';
import RecruitmentClient from './RecruitmentClient';

export default async function RecruitmentPage({ params }) {
  const { locale } = await params;

  const jobOpenings = await prisma.recruitment.findMany({
    where: { status: 'open' },
    orderBy: { postedAt: 'desc' },
  });

  // Serialize dates
  const serialized = jobOpenings.map(j => ({
    ...j,
    postedAt: j.postedAt.toISOString(),
    deadline: j.deadline?.toISOString() ?? null,
    createdAt: j.createdAt.toISOString(),
    updatedAt: j.updatedAt.toISOString(),
  }));

  return <RecruitmentClient jobOpenings={serialized} />;
}
