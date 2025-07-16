import quotaionMarkIcon from "../../assets/quotationmark.svg";
import workcationIcon from "../../assets/workcation.svg";
export default function TestimonialWithImg({
  img = null,
  name = "annoymous",
  children,
  work,
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
            <p className="text-lg font-normal">Workcation, CTO</p>
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
            <p className="text-lg font-normal">Workcation, CTO</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="lg:hidden max-w-[376px] min-h-[552px] px-6 py-10 flex flex-col justify-center items-center gap-16 shadow-lg">
        <div className=" flex justify-center items-center ">
          <img src={workcationIcon} />
        </div>
        <div>
          <p className="font-medium font-sans text-xl">"{children}"</p>
        </div>
        <div className="self-start">
          <p>{name}</p>
          <p>Workcation, CTO</p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center gap-6">
        <div className=" flex justify-center items-center ">
          <img src={workcationIcon} />
        </div>
        <div className="w-120">
          <p className="font-medium font-sans text-xl text-center">
            "{children}"
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <p className="text-md font-medium">
            {name}
            <span className="text-blue-800 ml-5 font-bold text-xl">/</span>
          </p>
          <p className="text-zinc-500 font-medium">workcation, CTO</p>
        </div>
      </div>
    </div>
  );
}
