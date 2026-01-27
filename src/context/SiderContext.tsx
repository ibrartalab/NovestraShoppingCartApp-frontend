import React, { createContext, useState } from "react";

interface slidersProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

interface SliderControllerProviderType {
  children: React.ReactNode;
}

const SliderContext = createContext<slidersProps>({
  counter: 0,
  setCounter: () => {},
});

const SliderControllerContext = ({ children }: SliderControllerProviderType) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <SliderContext.Provider value={{ counter, setCounter }}>
      {children}
    </SliderContext.Provider>
  );
};

export { SliderContext };

export default SliderControllerContext;
