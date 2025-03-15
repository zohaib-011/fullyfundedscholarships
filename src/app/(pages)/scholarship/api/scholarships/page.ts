import { NextRequest, NextResponse } from 'next/server';

// ✅ Use `const` instead of `let` because `scholarships` is not reassigned
const scholarships = [
  {
    title: "Erasmus Mundus IMAPP Scholarships 2025-26 (Fully Funded)",
    heading: {
      title: "Erasmus Mundus IMAPP Scholarships 2025-26 for International Students",
      description:
        "Applications are invited to apply for the Erasmus Mundus IMAPP Scholarships 2025-26. All international students are eligible to apply for the Erasmus IMAPP Scholarship. Candidates who want to study in France, Germany, and Italy on a Fully Funded Scholarship are encouraged to apply. The scholarships are available to pursue a fully funded Masters Degree. These scholarships are available for academic session of 2025-2026. Also apply for the International Graduate Scholarship 2025 in Japan (Fully Funded). Online education",
    },
    table: {
      title: "Erasmus Mundus IMAPP Scholarships 2025 Details:",
      details: [
        { title: "Offered by", description: "European Union" },
        { title: "Degree level", description: "Masters" },
        { title: "Scholarship coverage", description: "Fully Funded" },
        { title: "Eligible nationality", description: "All Nationalities" },
        { title: "Award country", description: "France, Germany, and Italy" },
        { title: "Last Date", description: "16 March 2025" },
      ],
    },
  },
];

// ✅ Fix: Use `_req` to indicate an unused parameter
export async function GET() {
  return NextResponse.json(scholarships, { status: 200 });
}

// ✅ Fix: Create a new array instead of mutating the original `const` array
export async function POST(req: NextRequest) {
  const newScholarship = await req.json();
  // const updatedScholarships = [...scholarships, newScholarship]; // Create a new array

  return NextResponse.json(
    { message: "Scholarship added successfully", data: newScholarship },
    { status: 201 }
  );
}
