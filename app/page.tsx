import Link from "next/link";
export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="text-center text-2xl">
        Please go to <span> </span>
        <Link className="underline text-green-600" href={"/homePage"}>
          homepage route
        </Link>
      </div>
    </div>
  );
}
