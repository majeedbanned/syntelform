import { useFormContext } from "react-hook-form";

const StepFour = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <h2 className="text-xl font-semibold">4.Financial Information</h2>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Annual Income:
          </label>
          {errors.AnnualIncome && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.AnnualIncome.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("AnnualIncome", {
            required: "AnnualIncome details are required",
          })}
        >
          <option value="">Annual Income</option>
          <option value="Self Employed">Below $10,000</option>
          <option value="Retired">$10,000-$49,999</option>
          <option value="Unemployed">$50,000-$249,999</option>
          <option value="Student">$250,000- $499,999</option>
          <option value="House Wife">$500,000-1 million</option>
          <option value="House Wife">Above 1 million</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Value of Savings:
          </label>
          {errors.ValueofSavings && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.ValueofSavings.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("ValueofSavings", {
            required: "ValueofSavings details are required",
          })}
        >
          <option value=""> Value of Savings</option>
          <option value="Self Employed">Below $10,000</option>
          <option value="Retired">$10,000-$49,999</option>
          <option value="Unemployed">$50,000-$249,999</option>
          <option value="Student">$250,000- $499,999</option>
          <option value="House Wife">$500,000-1 million</option>
          <option value="House Wife">Above 1 million</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Source of Wealth:
          </label>
          {errors.SourceofWealth && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.SourceofWealth.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("SourceofWealth", {
            required: "Source of Wealth details are required",
          })}
        >
          <option value=""> </option>
          <option value="Self Employed">Savings/Investments/Pension</option>
          <option value="Retired">Employment Income</option>
          <option value="Unemployed">Family Income/Inheritance</option>
        </select>
      </div>

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
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            What is the expected initial amount of deposit:
          </label>
          {errors.expecteddeposit && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.expecteddeposit.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("expecteddeposit", {
            required: "expected deposit details are required",
          })}
        >
          <option value=""> </option>
          <option value="Self Employed">Below $10,000</option>
          <option value="Retired">$10,000-$49,999</option>
          <option value="Unemployed">$50,000-$249,999</option>
          <option value="Student">$250,000- $499,999</option>
          <option value="House Wife">$500,000-1 million</option>
          <option value="House Wife">Above 1 million</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Investment Objective:
          </label>
          {errors.InvestmentObjective && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.InvestmentObjective.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("InvestmentObjective", {
            required: "Investment Objective  details are required",
          })}
        >
          <option value=""> </option>
          <option value="Self Employed">Asset Diversification</option>
          <option value="Retired">Investment Opportunities</option>
          <option value="Unemployed">Planning for the Future</option>
          <option value="Student">Asset Preservation</option>
          <option value="House Wife">Increase Sources of Income</option>
        </select>
      </div>
    </div>
  );
};

export default StepFour;
