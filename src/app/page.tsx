import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center gap-10">
        <Link href={"/question-1/dashboard"} className="text-white font-bold text-xl">
          Question-1
        </Link>
        <Link href={"/question-2/dashboard"} className="text-white font-bold text-xl">
          Question-2
        </Link>
      </div>
    </>
  );
}
