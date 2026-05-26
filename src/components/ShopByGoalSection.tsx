import ShopByGoalChips from "@/components/marketplace/ShopByGoalChips";

const ShopByGoalSection = () => {
  return (
    <section
      className="border-b border-navy-100 bg-white py-8"
      aria-labelledby="shop-by-goal-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-left">
            <h2
              id="shop-by-goal-heading"
              className="text-sm font-bold text-navy-950"
            >
              Shop by business goal
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Browse services aligned to your priority outcomes.
            </p>
          </div>
          <ShopByGoalChips mode="link" />
        </div>
      </div>
    </section>
  );
};

export default ShopByGoalSection;
