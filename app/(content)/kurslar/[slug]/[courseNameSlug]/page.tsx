"use client";

import { useParams } from "next/navigation";

export default function CourseDetailsPage() {
  const { courseNameSlug } = useParams();

  return <div>{courseNameSlug}</div>;
}
