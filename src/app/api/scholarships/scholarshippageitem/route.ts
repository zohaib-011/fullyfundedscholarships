import { NextRequest, NextResponse } from 'next/server';
const scholarshipData = [
  {
    "title": "Financial Benefits",
    "description": "<b>GIST International Scholarships 2025</b> in South Korea is a fully funded scholarship for international students to pursue a master's or PhD degree. The scholarship covers all necessary expenses.",
    "points": [
      "Complete Tuition Fee: 3,415,000 won per semester",
      "Monthly Stipends:",
      "Masters Degree: 140,000 won per month",
      "PhD Degree: 295,000 won per month",
      "4,820,000 won per year for MS students",
      "11,480,000 won per year for PhD students",
      "60% of the Korean National Health Insurance fee is supported",
      "Annual medical checkup",
      "Reimbursement for a one-way flight to Korea"
    ]
  },
  {
    "title": "List of Available Study Fields",
    "description": "Students can apply for any of the following study fields under the <b>GIST Scholarship</b> program.",
    "points": [
      "Department of Chemistry",
      "School of Integrated Technology",
      "School of Earth Sciences and Environmental Engineering",
      "Department of Physics and Photon Science",
      "School of Electrical Engineering and Computer Science",
      "School of Materials Science and Engineering",
      "School of Mechanical Engineering",
      "School of Life Science",
      "Department of Biomedical Science and Engineering",
      "Artificial Intelligence Graduate School"
    ]
  },
  {
    "title": "Documents Required",
    "description": "To apply for <b>GIST International Scholarships 2025</b>, applicants must submit the following documents via email. No postal submission is required.",
    "points": [
      "Statement on Application Documents Submission (Form1)",
      "Certificate of Bachelor’s Degree or Bachelor’s Diploma",
      "Bachelor’s Degree Transcript",
      "Certificate of Master’s Degree or Master’s Diploma",
      "Master’s Degree Transcript",
      "Two Letters of Recommendation (Form2)",
      "Certificate of Valid English Proficiency Test",
      "Applicant’s Passport Copy",
      "Letter of Recommendation for Matriculation Fee Waiver (Form3) (Optional)",
      "Certificate of English Proficiency issued by your home university (Optional)"
    ]
  },
  {
    "title": "Eligibility Criteria",
    "description": "Candidates must meet the following criteria to be eligible for the <b>GIST Scholarship</b>.",
    "points": [
      "Students of any nationality from any part of the world are eligible to apply.",
      "To apply for a Master's Degree Scholarship, applicants must hold an Undergraduate Degree.",
      "To apply for a Doctoral Degree Scholarship, applicants must hold a Master’s Degree."
    ]
  },
  {
    "title": "Application Deadline",
    "description": "The last date to apply for the <b>GIST Scholarship 2025</b> in South Korea is 14th April 2025. Apply as soon as possible.",
    "points": []
  },
  {
    "title": "Application Procedure",
    "description": "There is an online application form to apply for <b>GIST International Scholarships 2025</b>. Applicants must complete the form, upload the required documents, or send them via email.",
    "points": [
      "Fill out the online application form.",
      "Upload the required documents or email them to the university.",
      "Visit the official website for further details on the application process."
    ]
  }
]


export async function GET() {
  return NextResponse.json(scholarshipData, { status: 200 });
}