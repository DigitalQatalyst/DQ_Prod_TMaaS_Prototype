"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Globe, ArrowRight, ArrowLeft, Star, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const industries = [
  "Financial Services",
  "Healthcare",
  "Retail & E-commerce",
  "Manufacturing",
  "Technology",
  "Telecommunications",
  "Energy & Utilities",
  "Government",
  "Education",
  "Other",
];

const orgSizes = [
  "1-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1,000 employees",
  "1,001-5,000 employees",
  "5,000+ employees",
];

export default function OnboardingOrganisationPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const [orgName, setOrgName] = useState("");
  const [orgWebsite, setOrgWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [websiteAccuracy, setWebsiteAccuracy] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const isStep1Valid = orgName && orgWebsite && industry && orgSize;

  const handleNext = () => {
    if (step < 2) setStep(2);
    else router.push("/onboarding/complete");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/30 to-background px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`h-2 w-2 rounded-full ${s <= step ? "bg-primary" : "bg-border"}`}
                ></div>
                {s < 2 && (
                  <div className={`h-1 w-12 ${s < step ? "bg-primary" : "bg-border"}`}></div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">Step {step} of 2</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          {step === 1 ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Organisation Identity</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us about your organisation
                </p>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Organisation Name <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Building2
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="text"
                      placeholder="e.g., STC Bank"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Organisation Website <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Globe
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="url"
                      placeholder="https://www.example.com"
                      value={orgWebsite}
                      onChange={(e) => setOrgWebsite(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Industry <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Organisation Size <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={orgSize}
                    onChange={(e) => setOrgSize(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select size</option>
                    {orgSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Business Context</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Help us understand your organisation better
                </p>
              </div>
              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  How accurate is the information on your website?
                </label>
                <div className="flex items-center justify-center gap-3 rounded-lg border border-border bg-accent/30 p-6">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setWebsiteAccuracy(rating)}
                      className={`transition-all ${rating <= websiteAccuracy ? "text-yellow-500" : "text-muted-foreground/30"} hover:scale-110`}
                    >
                      <Star size={40} fill={rating <= websiteAccuracy ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Supporting Documents (Optional)
                </label>
                <div className="rounded-lg border-2 border-dashed border-border bg-accent/30 p-8 text-center">
                  <Upload size={32} className="mx-auto mb-3 text-muted-foreground" />
                  <p className="mb-4 text-xs text-muted-foreground">
                    Organisation structure, strategy, financial reports, etc.
                  </p>
                  <input
                    type="file"
                    id="documents"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="documents">
                    <Button type="button" variant="outline" size="sm" asChild>
                      <span>Choose Files</span>
                    </Button>
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-border bg-accent/30 p-3"
                      >
                        <span className="text-sm text-foreground">{file.name}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
                          }
                          className="text-xs text-destructive hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft size={18} />
              Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              disabled={step === 1 && !isStep1Valid}
              className="gap-2 bg-gradient-brand shadow-brand"
            >
              {step === 2 ? "Complete Setup" : "Continue"}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
