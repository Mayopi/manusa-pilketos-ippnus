const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-3 justify-center items-center">
      <p className="font-semibold text-xl uppercase tracking-wider">Loading Page Content Please Wait</p>
      <div className="loading loading-dots loading-lg text-secondary"></div>
    </div>
  );
};

export default Loading;
