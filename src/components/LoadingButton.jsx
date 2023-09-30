const LoadingButton = () => {
  return (
    <button className="w-full btn btn-disabled font-semibold uppercase tracking-wider">
      <div className="loading loading-spinner"></div> Loading...
    </button>
  );
};

export default LoadingButton;
