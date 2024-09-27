import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (<div className="flex flex-col items-center justify-center min-h-screen gap-12">
    <h1 className="text-2xl text-red-500 font-semibold">

    The requested resources was not found!
    </h1>
    <Link href="/dashboard" className="bg-green-600 py-2 px-3 rounded-lg text-white" >
    Return to Dashboard
    </Link>
    </div>);
};

export default NotFound;
