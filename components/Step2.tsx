import { useFormContext } from "react-hook-form";

const Step2 = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <h2 className="text-xl font-semibold">2. Residential Address</h2>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Building No. and Street:
          </label>
          {errors.BuildingNo && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.BuildingNo.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("BuildingNo", {
            required: "BuildingNo is required",
          })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Town/City:
          </label>
          {errors.TownCity && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.TownCity.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("TownCity", { required: "required" })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            State:
          </label>
          {errors.State && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.State.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("State", { required: "required" })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Country:
          </label>
          {errors.country && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.country.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("country", {
            required: "required",
          })}
        >
          <option value="">Country of Residence</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            P.O. Box:
          </label>
          {errors.POBox && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.POBox.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("POBox", { required: "required" })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Is the above-mentioned address your current residential address?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("currentresidential", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("currentresidential", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
        {errors.currentresidential && (
          <span className="text-red-500 text-sm">
            {errors.currentresidential.message}
          </span>
        )}
      </div>

      {watch("currentresidential") === "No" && (
        <>
          <div>
            <div className="flex flex-row">
              <label className="block text-sm font-medium text-gray-700">
                Current Building No. and Street:
              </label>
              {errors.cuBuildingNo && (
                <span className="text-red-500 text-sm ml-auto">
                  {errors.cuBuildingNo.message}
                </span>
              )}
            </div>
            <input
              className="w-full p-2 border rounded"
              {...register("cuBuildingNo", {
                required: "Current BuildingNo is required",
              })}
            />
          </div>

          <div>
            <div className="flex flex-row">
              <label className="block text-sm font-medium text-gray-700">
                Current Town/City:
              </label>
              {errors.cuTownCity && (
                <span className="text-red-500 text-sm ml-auto">
                  {errors.cuTownCity.message}
                </span>
              )}
            </div>
            <input
              className="w-full p-2 border rounded"
              {...register("cuTownCity", { required: "required" })}
            />
          </div>

          <div>
            <div className="flex flex-row">
              <label className="block text-sm font-medium text-gray-700">
                Current State:
              </label>
              {errors.cuState && (
                <span className="text-red-500 text-sm ml-auto">
                  {errors.cuState.message}
                </span>
              )}
            </div>
            <input
              className="w-full p-2 border rounded"
              {...register("cuState", { required: "required" })}
            />
          </div>

          <div>
            <div className="flex flex-row">
              <label className="block text-sm font-medium text-gray-700">
                Current Country:
              </label>
              {errors.cucountry && (
                <span className="text-red-500 text-sm ml-auto">
                  {errors.cucountry.message}
                </span>
              )}
            </div>
            <select
              className="w-full p-2 border rounded"
              {...register("cucountry", {
                required: " required",
              })}
            >
              <option value="">Country of Residence</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
            </select>
          </div>

          <div>
            <div className="flex flex-row">
              <label className="block text-sm font-medium text-gray-700">
                Current P.O. Box:
              </label>
              {errors.cuPOBox && (
                <span className="text-red-500 text-sm ml-auto">
                  {errors.cuPOBox.message}
                </span>
              )}
            </div>
            <input
              className="w-full p-2 border rounded"
              {...register("cuPOBox", { required: "required" })}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Step2;
