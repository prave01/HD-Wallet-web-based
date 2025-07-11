const Clouds = ({ color }: { color: string }) => {
  return (
    <div className="clouds h-0">
      <div
        className={`h-[50px] w-[50px] rounded-full ${color} translate-x-4 shadow-2xl shadow-rose-950`}
      >
        {" "}
      </div>
      <div
        className={`h-[50px] w-[50px] rounded-full ${color} -translate-y-10`}
      >
        {" "}
      </div>
      <div
        className={`h-[40px] w-[40px] rounded-full ${color} translate-x-10 -translate-y-20`}
      >
        {" "}
      </div>
      <div
        className={`h-[35px] w-[35px] rounded-full ${color} translate-x-15 -translate-y-29`}
      >
        {" "}
      </div>
      <div
        className={`h-[35px] w-[35px] rounded-full ${color} translate-x-5 -translate-y-37`}
      >
        {" "}
      </div>
    </div>
  );
};

export default Clouds;
