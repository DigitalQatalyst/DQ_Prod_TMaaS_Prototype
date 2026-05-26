import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  marketplaceGoals,
  marketplaceIndustries,
  marketplaceServiceTypes,
} from "@/data/marketplaceNavigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type MarketplaceFiltersProps = {
  selectedGoals: string[];
  onGoalChange: (value: string) => void;
  selectedIndustries: string[];
  onIndustryChange: (value: string) => void;
  selectedServiceTypes: string[];
  onServiceTypeChange: (value: string) => void;
  onClearAll: () => void;
  showClearAll: boolean;
};

function FilterField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-navy-950">{label}</label>
      {children}
    </div>
  );
}

function CheckboxGroup({
  options,
  selectedValues,
  onChange,
}: {
  options: readonly { id: string; label: string }[];
  selectedValues: string[];
  onChange: (val: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      {options.map((opt) => (
        <div key={opt.id} className="flex items-start space-x-2.5">
          <Checkbox
            id={`filter-${opt.id}`}
            checked={selectedValues.includes(opt.id)}
            onCheckedChange={() => {
              onChange(opt.id);
            }}
            className="mt-0.5"
          />
          <Label
            htmlFor={`filter-${opt.id}`}
            className="text-sm font-normal text-slate-600 leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {opt.label}
          </Label>
        </div>
      ))}
    </div>
  );
}

const MarketplaceFilters = ({
  selectedGoals,
  onGoalChange,
  selectedIndustries,
  onIndustryChange,
  selectedServiceTypes,
  onServiceTypeChange,
  onClearAll,
  showClearAll,
}: MarketplaceFiltersProps) => {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
        <h2 className="text-base font-semibold text-navy-950">Filters</h2>
        {showClearAll && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs font-medium text-orange-600 hover:text-orange-500 transition"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-8">
        <FilterField label="Business goal">
          <CheckboxGroup
            options={marketplaceGoals}
            selectedValues={selectedGoals}
            onChange={onGoalChange}
          />
        </FilterField>

        <FilterField label="Industry">
          <CheckboxGroup
            options={marketplaceIndustries}
            selectedValues={selectedIndustries}
            onChange={onIndustryChange}
          />
          {selectedIndustries.length > 0 && (
            <p className="mt-2 text-[11px] text-gray-400 leading-snug">
              Updates service titles for your sector.
            </p>
          )}
        </FilterField>

        <FilterField label="Service Type">
          <CheckboxGroup
            options={marketplaceServiceTypes}
            selectedValues={selectedServiceTypes}
            onChange={onServiceTypeChange}
          />
        </FilterField>
      </div>

      {showClearAll && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onClearAll}
          className="mt-6 w-full h-9 rounded-lg border-navy-100 text-xs font-medium lg:hidden"
        >
          Clear all filters
        </Button>
      )}
    </div>
  );
};

export default MarketplaceFilters;

