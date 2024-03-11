"use client";
import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/components/providers";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Splashscreen from "@/components/splashScreen/splashscreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }),
    [isLoading];

  return (
    <html lang="en">
      <head>
        <title>Muchamad Yuda</title>
        <meta name="description" content="Description" />
      </head>
      <body className={inter.className}>
        <Providers>
          {isLoading && isHome ? (
            <Splashscreen finishLoading={() => setLoading(false)} />
          ) : (
            <Box as="main" pb={8}>
              <Navbar />
              <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
              </Container>
            </Box>
          )}
        </Providers>
      </body>
    </html>
  );
}
