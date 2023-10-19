"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        height={300}
        width={300}
        src="/error.png"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        height={300}
        width={300}
        src="/error-dark.png"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        Something went wrong!
      </h2>
      <Button asChild>
        <Link href="/documents">
          Go back
        </Link>
      </Button>
    </div>
  );
};

export default Error;
