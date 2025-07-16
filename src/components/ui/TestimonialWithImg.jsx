import quotaionMarkIcon from "../../assets/quotationmark.svg";
export default function TestimonialWithImg({
  img = null,
  name = "annoymous",
  children,
}) {
  return img ? (
    <div className="w-fit lg:min-h-[464px] lg:flex lg:flex-col lg:justify-center relative">
      <div className="lg:hidden flex flex-col max-w-[376px] min-h-[336px]">
        <div className="relative flex flex-col lg:hidden">
          <div className="w-full h-[103px] bg-amber-50"></div>
          <div className="w-full h-[103px] bg-blue-800"></div>
          <div className="px-3 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <img
              className="w-full h-full rounded-xl object-cover object-center"
              src={img}
            />
          </div>
        </div>
        <div className="p-7 flex flex-col gap-7 bg-blue-800 text-xl font-normal text-white">
          <img src={quotaionMarkIcon} className="w-10" />
          <p>{children}</p>
          <div>
            <p className="text-lg font-medium">{name}</p>
            <p className="text-lg font-normal">Workaction, CTO</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 left-10">
        <img
          className="w-[384px] h-[460px] rounded-xl object-cover object-center"
          src={img}
        />
      </div>

      <div className="hidden lg:flex bg-blue-800 min-w-200 min-h-[400px] flex-row">
        <div className="bg-blue-800 min-w-[422px]"></div>
        <div className="p-7 flex flex-col justify-center gap-7 bg-blue-800 text-xl font-normal text-white">
          <img src={quotaionMarkIcon} className="w-10" />
          <p>{children}</p>
          <div>
            <p className="text-lg font-medium">{name}</p>
            <p className="text-lg font-normal">Workaction, CTO</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
