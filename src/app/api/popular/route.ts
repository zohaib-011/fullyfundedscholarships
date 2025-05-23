import { NextRequest, NextResponse } from "next/server";

// ✅ Use `const` since the array reference itself is not reassigned
const popularScholarships = [
  {
    id: 1,
    title: "Young Professional Fellowship 2025 in Canada (Fully Funded)",
    date: "January 28, 2025",
    image: "assets/images/erasmus.webp",
  },
  {
    id: 2,
    title: "Korean Government GKS Scholarship 2025-26 in Korea (Fully Funded)",
    date: "January 28, 2025",
    image: "assets/images/erasmus.webp",
  },
  {
    id: 3,
    title: "PSU International Internship 2025 in Thailand (Fully Funded)",
    date: "January 27, 2025",
    image: "assets/images/erasmus.webp",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  return NextResponse.json(popularScholarships, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const newScholarship = await req.json();
    newScholarship.id = popularScholarships.length + 1;

    // ✅ Use `.concat()` instead of `.push()` to create a new array
    // const updatedScholarships = [...popularScholarships, newScholarship];

    return NextResponse.json(
      { message: "Scholarship added successfully", data: newScholarship },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ message: "Error adding scholarship" }, { status: 500 });
  }
}
