import React from "react";
import { Link } from "react-router-dom";
import Icon from "./IconSVG";

export default function Header({ pageTitle }) {
  return (
    <header className="w-screen h-24 lg:h-28 bg-primary flex items-center shadow-md shadow-gray-900">
      <Link to="/">
        <Icon />
      </Link>
      <h1 className="text-4xl pl-2">{pageTitle}</h1>
    </header>
  );
}
