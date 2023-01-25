import {strapiFetch} from "@/utils/http";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await strapiFetch("root-layout", [
    "logo",
    "navbar",
    "navbar.navlinks",
  ]);

  const { logo, navbar } = data?.attributes;

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <body>
        <div className="container p-4 mx-auto flex flex-col items-center">
          <Image
            src={`http://localhost:1337${logo?.data?.attributes?.url}`}
            width={100}
            height={100}
            alt="logo"
          />
          <div className="flex space-x-4 my-8 text-xl">
            {navbar?.navlinks?.map((item: any) => (
              <Link
                key={item?.id}
                className="hover:text-red-500"
                href={item?.linkTo}
              >
                {item?.label}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
