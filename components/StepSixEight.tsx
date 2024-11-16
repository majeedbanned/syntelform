import { useFormContext } from "react-hook-form";

const StepSixEight = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <h2 className="text-xl mb-5 text-blue-600 border-[0px] flex items-center font-semibold">
        Account type
      </h2>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Account type
          </label>
          {errors.Accounttype && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.Accounttype.message}
            </span>
          )}
        </div>
        <select
          className="w-full  h-11 p-2 border rounded"
          {...register("Accounttype", {
            required: "Accounttype details are required",
          })}
        >
          <option value=""></option>
          <option value="1">Meta Trader 4 </option>
          <option value="2">Meta Trader 5 </option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Language
          </label>
          {errors.Language && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.Language.message}
            </span>
          )}
        </div>
        <select
          className="w-full  h-11 p-2 border rounded"
          {...register("Language", {
            required: " details are required",
          })}
        >
          <option value=""></option>
          <option value="1">Arabic </option>
          <option value="2">English</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Expected Trading Volume Per Month in Lots
            <br />
          </label>
          {errors.ExpectedTradingVolume && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.ExpectedTradingVolume.message}
            </span>
          )}
        </div>
        <select
          className="w-full  h-11 p-2 border rounded"
          {...register("ExpectedTradingVolume", {
            required: "required",
          })}
        >
          <option value=""> </option>
          <option value="Less than 10">Less than 10</option>
          <option value="10 - 50 lots ">10 - 50 lots </option>
          <option value="50 - 150 lots">50 - 150 lots</option>
          <option value="More than 150 lots">More than 150 lots</option>
        </select>
      </div>
      {/* 
      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Other, please specify:
          </label>
          {errors.Otherpleasespecify && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.Otherpleasespecify.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("Otherpleasespecify", {
            required: "This field is required",
          })}
        />
      </div> */}
    </div>
  );
};

export default StepSixEight;
