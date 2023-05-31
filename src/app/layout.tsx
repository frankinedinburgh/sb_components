import { Roboto } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "src/components/Navbar";

const robotos = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotos.className}>
      <body>
        <Navbar
          links={[
            {
              title: "Home",
              link: "/",
            },
            {
              title: "Workouts",
              link: "/workouts",
            },
            {
              title: "Sessions",
              link: "/workouts/sessions",
            },
            {
              title: "Exercises",
              link: "/workouts/exercises",
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
