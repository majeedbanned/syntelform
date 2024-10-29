import { useFormContext } from "react-hook-form";

const StepSix = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h2 className="text-xl font-semibold">6.Trading Experience</h2>
        8.1 How many times have you traded or invested the following products in
        the last three years?
      </div>
      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Exchange Traded Derivatives For example: warrants, futures or
            options (including forex)
          </label>
          {errors.ExchangeTradedDerivatives && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.ExchangeTradedDerivatives.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("ExchangeTradedDerivatives", {
            required: "ExchangeTradedDerivatives details are required",
          })}
        >
          <option value=""></option>
          <option value="1">0-10 Times </option>
          <option value="2">10-20 Times</option>
          <option value="3">Over 20 Times</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Over the Counter Derivatives For example: CFDs, Spread Bets
            (including forex)
          </label>
          {errors.CounterDerivatives && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.CounterDerivatives.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("CounterDerivatives", {
            required: " details are required",
          })}
        >
          <option value=""></option>
          <option value="1">0-10 Times </option>
          <option value="2">10-20 Times</option>
          <option value="3">Over 20 Times</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            How have you mostly traded these products?
            <br />
          </label>
          {errors.mostlytraded && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.mostlytraded.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("mostlytraded", {
            required: "required",
          })}
        >
          <option value=""> </option>
          <option value="Self Employed">Independently or with Advice</option>
          <option value="Retired">Through a managed fund</option>
          <option value="Unemployed">Never</option>
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

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            On which following Financial Instruments you have independently
            traded in last 3 years?
          </label>
          {errors.independentlytraded && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.independentlytraded.message}
            </span>
          )}
        </div>

        <select
          className="w-full p-2 border rounded"
          {...register("independentlytraded", {
            required: " required",
          })}
        >
          <option value=""> </option>
          <option value="1">Forex </option>
          <option value="2">Metals</option>
          <option value="3">Commodities</option>
          <option value="4">Stocks</option>
          <option value="5">Indices</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Previous trading volume per month in lots
          </label>
          {errors.Previoustradingvolume && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.Previoustradingvolume.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("Previoustradingvolume", {
            required: "required",
          })}
        >
          <option value=""> </option>
          <option value="Self Employed">10 - 50 lots</option>
          <option value="Retired">50 - 150 lots</option>
          <option value="Unemployed">More than 150 lots</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Do you have any qualification or experience in trading leverage
            products?
          </label>
          {errors.experienceintradingleverage && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.experienceintradingleverage.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("experienceintradingleverage", {
            required: "required",
          })}
        >
          <option value=""> </option>
          <option value="2">
            Yes, worked in a relevant financial institution
          </option>
          <option value="3">Yes, a relevant professional qualification</option>
          <option value="4">Yes, both of the above</option>
          <option value="5">No</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            What level of education do you hold?
          </label>
          {errors.levelofeducation && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.levelofeducation.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("levelofeducation", {
            required: "required",
          })}
        >
          <option value=""> </option>
          <option value="2">Diploma</option>
          <option value="3">Bachelors</option>
          <option value="4">Masters</option>
          <option value="5">PHD</option>
          <option value="6">None of the above</option>
        </select>
      </div>
    </div>
  );
};

export default StepSix;
