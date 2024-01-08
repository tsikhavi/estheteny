const LoadingAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-200">
      <div className="animate-pulse rounded-full h-20 w-20 border-t-4 border-b-4 border-allports-700"></div>
    </div>
  );
};

export default LoadingAnimation;
