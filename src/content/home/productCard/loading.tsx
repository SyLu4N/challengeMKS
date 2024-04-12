export function LoadingProductCart() {
  const newArray = new Array(8).fill('loading');

  return (
    <div className="max-w-[938px] py-4 pb-12 sm:py-20 m-auto gap-6 justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {newArray.map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 w-[251px] h-[300px] sm:w-[218px] flex flex-col justify-between gap-4 sm:h-[285px] rounded-md m-auto"
        >
          <div className="flex flex-col gap-4 p-2">
            <div className="w-[98%] h-[132px] m-auto bg-gray-300 rounded-md" />

            <div className="flex gap-4 items-center">
              <div className="w-full">
                <div className="bg-gray-300 w-[90%] mb-1 h-[20px] rounded-md" />
                <div className="bg-gray-300 w-[70%] h-[20px] rounded-md" />
              </div>

              <div className="bg-gray-300 w-[40%] h-[26px] rounded-md" />
            </div>

            <div>
              <div className="h-[10px] mb-1 w-[80%] bg-gray-300 rounded-sm" />
              <div className="h-[10px] w-[98%] bg-gray-300 rounded-sm" />
            </div>
          </div>

          <div className=" bg-gray-300 h-[36px] rounded-b-md" />
        </div>
      ))}
    </div>
  );
}
