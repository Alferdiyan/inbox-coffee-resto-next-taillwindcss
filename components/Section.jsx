const Section = ({ children, id, style }) => {
  return (
    <section id={id} className={`min-h-screen w-screen overflow-x-hidden relative px-10 md:px-[8rem] py-[1rem] ${style}`}>
      {children}
    </section>
  );
};

export default Section;
