import { FC } from "react";

import Gallery from "@/Components/Gallery";


const App: FC = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen bg-slate-200 flex items-center justify-center">
        <Gallery></Gallery>
      </div>
    </>
  );
};

export default App;
