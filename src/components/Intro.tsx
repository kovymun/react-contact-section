const Intro = () => {
  return (
    <section className="relative h-56 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/80 via-blue-800/60 to-slate-600" />
      <div className="relative z-10 text-center pb-6 px-4 lg:pb-0 lg:px-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Riverside Medical Centre
        </h1>
        <p className="text-blue-100 text-sm mt-2 max-w-md mx-auto">
          Connecting you to world class care in a clinical sanctuary designed
          for healing.
        </p>
      </div>
    </section>
  );
};

export default Intro;
