import { FC, PropsWithChildren } from "react";

export const Footer: FC<IFooter> = ({ children }) => {
  return <footer>{children}</footer>;
};

interface IFooter extends PropsWithChildren {}
