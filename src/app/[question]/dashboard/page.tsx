"use client";
import { useParams } from "next/navigation";
import QuestionOne from "@/components/QuestionOne"
import QuestionTwo from "@/components/QuestionTwo";


const page = () => {
  const params = useParams();
  const { question } = params;
  return (
    <>
      {question === "question-1" && <QuestionOne />}
      {question === "question-2" && <QuestionTwo />}
    </>
  );
};

export default page;
