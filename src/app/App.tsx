import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";
import Gallery from "@/Components/Gallery";

const App: FC = () => {
  return (
    <>
      <Gallery></Gallery>
    </>
  );
};

export default App;
