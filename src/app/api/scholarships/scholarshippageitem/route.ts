import { NextRequest, NextResponse } from 'next/server';
const scholarshipData = [{
    title: "Financial Benefits",
    description:
      "GIST International Scholarships 2025 in South Korea is a Full Free Scholarship...",
    points: [
      "Complete Tuition Fee: 3,415,000 won per semester",
      "Masters Degree: 140,000 won per month",
      "PhD Degree: 295,000 won per month",
      "Annual Medical Checkup",
      "Reimbursement for a one-way flight to Korea",
    ],
  },
  {
    title: "Financial Benefits",
    description:
      "GIST International Scholarships 2025 in South Korea is a Full Free Scholarship...",
    points: [
      "Complete Tuition Fee: 3,415,000 won per semester",
      "Masters Degree: 140,000 won per month",
      "PhD Degree: 295,000 won per month",
      "Annual Medical Checkup",
      "Reimbursement for a one-way flight to Korea",
    ],
  },
  {
    title: "Financial Benefits",
    description:
      "GIST International Scholarships 2025 in South Korea is a Full Free Scholarship...",
    points: [
      "Complete Tuition Fee: 3,415,000 won per semester",
      "Masters Degree: 140,000 won per month",
      "PhD Degree: 295,000 won per month",
      "Annual Medical Checkup",
      "Reimbursement for a one-way flight to Korea",
    ],
  },

];
export async function GET() {
  return NextResponse.json(scholarshipData, { status: 200 });
}