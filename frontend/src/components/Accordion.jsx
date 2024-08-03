/** @format */
import { createContext, useState, useContext } from "react";

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <div className="flex border-b-8 border-[#222] bg-black" {...restProps}>
      <div className="flex flex-col max-w-3xl mx-auto p-10">{children}</div>
    </div>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <h1
      className="text-5xl leading-tight my-0 mb-2 text-white text-center
                 sm:text-3xl"
      {...restProps}
    >
      {children}
    </h1>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return (
    <div className="mb-10" {...restProps}>
      {children}
    </div>
  );
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <div
        className="text-white mx-auto mb-2 max-w-3xl w-full first:mt-12 last:mb-0"
        {...restProps}
      >
        {children}
      </div>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <div
      className="flex justify-between cursor-pointer mb-px text-2xl font-normal bg-[#222] p-4 select-none items-center sm:text-lg"
      onClick={() => setToggleShow(!toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img
          src="/images/icons/close-slim.png"
          alt="Close"
          className="filter invert w-6 sm:w-4"
        />
      ) : (
        <img
          src="/images/icons/add.png"
          alt="Open"
          className="filter invert w-6 sm:w-4"
        />
      )}
    </div>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <div
      className={`text-2xl font-normal bg-[#222] whitespace-pre-wrap select-none overflow-hidden transition-max-height duration-250 ease-in-out ${
        toggleShow ? "max-h-screen" : "max-h-0"
      } sm:text-lg sm:leading-tight`}
      {...restProps}
    >
      <span className="block p-4">{children}</span>
    </div>
  );
};

export default Accordion;
