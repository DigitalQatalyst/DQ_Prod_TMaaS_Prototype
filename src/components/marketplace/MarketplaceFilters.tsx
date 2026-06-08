import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  marketplaceServiceTypes,
  marketplaceEconomySectors,
} from "@/data/marketplaceNavigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

interface MarketplaceFiltersProps {
  selectedSectors: string[];
  onSectorChange: (value: string) => void;
  selectedCategories: string[];
  onCategoryChange: (value: string) => void;
  selectedIncluded: string[];
  onIncludedChange: (value: string) => void;
  selectedServiceTypes: string[];
  onServiceTypeChange: (value: string) => void;
  onClearAll: () => void;
  showClearAll: boolean;
}

function FilterSection({
  label,
  defaultOpen = true,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-1 text-left">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
          {label}
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">{children}</CollapsibleContent>
    </Collapsible>
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
    <div className="space-y-4">
      {options.map((opt) => (
        <div key={opt.id} className="flex items-start gap-3">
          <Checkbox
            id={`filter-${opt.id}`}
            checked={selectedValues.includes(opt.id)}
            onCheckedChange={() => onChange(opt.id)}
            className="mt-0.5 border-gray-300 data-[state=checked]:border-navy-500 data-[state=checked]:bg-navy-500"
          />
          <Label
            htmlFor={`filter-${opt.id}`}
            className="cursor-pointer text-sm font-normal leading-snug text-gray-600"
          >
            {opt.label}
          </Label>
        </div>
      ))}
    </div>
  );
}

const SECTOR_PREVIEW_COUNT = 4;

const MarketplaceFilters = ({
  selectedSectors,
  onSectorChange,
  selectedCategories,
  onCategoryChange,
  selectedIncluded,
  onIncludedChange,
  selectedServiceTypes,
  onServiceTypeChange,
  onClearAll,
  showClearAll,
}: MarketplaceFiltersProps) => {
  const [sectorsExpanded, setSectorsExpanded] = useState(false);
  const visibleSectors = sectorsExpanded
    ? marketplaceEconomySectors
    : marketplaceEconomySectors.slice(0, SECTOR_PREVIEW_COUNT);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onClearAll}
          disabled={!showClearAll}
          className={`text-xs font-medium transition ${
            showClearAll
              ? "text-dq-orange hover:text-[#E04020]"
              : "cursor-default text-gray-300"
          }`}
        >
          Reset all
        </button>
        <SlidersHorizontal size={16} className="text-gray-400" aria-hidden />
      </div>

      <div className="space-y-8">
        <FilterSection label="Category">
          <CheckboxGroup
            options={[
              { id: "experience", label: "Digital Experience" },
              { id: "operations", label: "Digital Work System" },
              { id: "security", label: "SecDevOps" },
              { id: "ai", label: "Digital Intelligence & Analytics" },
            ]}
            selectedValues={selectedCategories}
            onChange={onCategoryChange}
          />
        </FilterSection>

        <FilterSection label="Services Included">
          <CheckboxGroup
            options={[
              { id: "single", label: "Single-service" },
              { id: "multi", label: "Multi-service (Bundles)" },
            ]}
            selectedValues={selectedIncluded}
            onChange={onIncludedChange}
          />
        </FilterSection>

        <FilterSection label="Economy 4.0 Sector">
          <CheckboxGroup
            options={visibleSectors}
            selectedValues={selectedSectors}
            onChange={onSectorChange}
          />
          {marketplaceEconomySectors.length > SECTOR_PREVIEW_COUNT && (
            <button
              type="button"
              onClick={() => setSectorsExpanded((prev) => !prev)}
              className="mt-4 flex w-full items-center justify-between text-xs font-medium text-gray-500 hover:text-dq-navy"
            >
              {sectorsExpanded ? "Show less" : "Show more"}
              <ChevronDown
                size={14}
                className={`transition-transform ${sectorsExpanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
          {selectedSectors.length > 0 && (
            <p className="mt-3 text-[11px] leading-snug text-gray-400">
              Updates service titles for your sector.
            </p>
          )}
        </FilterSection>

        <FilterSection label="Service Type" defaultOpen={false}>
          <CheckboxGroup
            options={marketplaceServiceTypes}
            selectedValues={selectedServiceTypes}
            onChange={onServiceTypeChange}
          />
        </FilterSection>
      </div>

      {showClearAll && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onClearAll}
          className="mt-8 h-9 w-full rounded-lg border-gray-200 text-xs font-medium lg:hidden"
        >
          Reset all filters
        </Button>
      )}
    </div>
  );
};

export default MarketplaceFilters;
