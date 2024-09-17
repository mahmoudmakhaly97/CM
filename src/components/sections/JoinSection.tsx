"use client";

import { Input } from "../input";
import { Label } from "../label";
import { Checkbox } from "../checkbox";
import { signup } from "@/app/actions";
import { cn } from "@/lib/utils";
import { FormSubmit } from "../form-submit";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { SectionContent } from "../section-content";

function JoinSection() {
  const [state, formAction] = useFormState(signup, {
    submitted: false,
    error: [],
  });

  const [isLanguageError, setIsLanguageError] = useState(
    state.error.includes("language-required"),
  );

  const [isOtherIndustry, setIsOtherIndustry] = useState(false);

  useEffect(() => {
    setIsLanguageError(state.error.includes("language-required"));
  }, [state.error]);

  return (
    <section id="join" className="bg-[#F8F9FA] scroll-mt-52">
      <SectionContent className={"py-20 px-14 md:px-[90px]"}>
        <form action={formAction} className="flex flex-col items-center gap-20">
          <div className="flex flex-col items-start w-full text-start gap-2">
            <h3 className="text-7xl font-bold">Join us, become a master</h3>
            <p className="text-2xl font-light text-[#828282]">
              It’s time to invest in your passion. Register today and our team will be in contact with you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                name="name"
                required
                placeholder="Full Name *"
                className="bg-[#E9EAEF] h-24 px-5 rounded-md font-extralight text-2xl"
              />
              <Input
                name="phone"
                required
                type="number"
                placeholder="Phone *"
                className="bg-[#E9EAEF] h-24 px-5 rounded-md font-extralight text-2xl"
              />
              <Input
                name="email"
                required
                type="email"
                placeholder="Email *"
                className="bg-[#E9EAEF] h-24 px-5 rounded-md font-extralight text-2xl"
              />
              <Input
                name="age"
                required
                type="number"
                placeholder="Age *"
                className="bg-[#E9EAEF] h-24 px-5 rounded-md font-extralight text-2xl"
              />

              <select
                required
                name="gender"
                defaultValue=""
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  "bg-[#E9EAEF] h-24 ps-5 rounded-md font-extralight text-2xl invalid:text-[#8D8C8C] border-e-[16px]",
                )}
              >
                <option value="" disabled>
                  Gender *
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                required
                name="emirate"
                defaultValue=""
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  "bg-[#E9EAEF] h-24 ps-5 rounded-md font-extralight text-2xl invalid:text-[#8D8C8C] border-e-[16px]",
                )}
              >
                <option value="" disabled>
                  Emirate of residence *
                </option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Dubai">Dubai</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Ajman">Ajman</option>
                <option value="Umm Al Quwain">Umm Al Quwain</option>
                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                <option value="Fujairah">Fujairah</option>
              </select>
              <Input
                name="social-media"
                required
                placeholder="Social media account Link *"
                className="bg-[#E9EAEF] h-24 px-5 rounded-md font-extralight text-2xl"
              />
              <select
                required
                name="industry"
                defaultValue=""
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  "bg-[#E9EAEF] h-24 ps-5 rounded-md font-extralight text-2xl invalid:text-[#8D8C8C] border-e-[16px]",
                )}
                onChange={(e) => {
                  console.log("WWW", { e });
                  if (e.target.value === "Other") {
                    setIsOtherIndustry(true);
                  } else {
                    setIsOtherIndustry(false);
                  }
                }}
              >
                <option value="" disabled>
                  Industry *
                </option>
                <option value="Tech and Gadgets">Tech and Gadgets</option>
                <option value="Finance and Investing">
                  Finance and Investing
                </option>
                <option value="Business">Business</option>
                <option value="Science">Science</option>
                <option value="Education">Education</option>
                <option value="Law">Law</option>
                <option value="Digital & AI">Digital & AI</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Other">Other</option>
              </select>
              {isOtherIndustry ? (
                <Input
                  name="industry-other"
                  required
                  placeholder="Industry ( Other ) *"
                  className="bg-[#E9EAEF] h-24 px-5 rounded-md font-extralight text-2xl"
                />
              ) : null}
            </div>
            <div>
              <div className="flex items-center gap-7">
                <Label
                  className={cn(
                    "text-[#8D8C8C] font-extralight text-2xl",
                    isLanguageError ? "text-red-500" : "",
                  )}
                >
                  Language *
                </Label>
                <div className="flex gap-6">
                  <div className="flex gap-2 items-center">
                    <Label
                      htmlFor="en"
                      className="text-[#8D8C8C] font-extralight text-2xl"
                    >
                      English
                    </Label>
                    <Checkbox
                      id="en"
                      name="language-en"
                      className="bg-[#E9EAEF] h-6 w-6"
                      onCheckedChange={() => setIsLanguageError(false)}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <Label
                      htmlFor="ar"
                      className="text-[#8D8C8C] font-extralight text-2xl"
                    >
                      Arabic
                    </Label>
                    <Checkbox
                      id="ar"
                      name="language-ar"
                      className="bg-[#E9EAEF] h-6 w-6"
                      onCheckedChange={() => setIsLanguageError(false)}
                    />
                  </div>
                </div>
              </div>
              {isLanguageError && (
                <p className="text-red-500 text-base">
                  Please select a language
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center md:justify-start w-full">
            {state.submitted && state.error.length === 0 ? (
              <p className="text-green-600 text-4xl">Thank you</p>
            ) : (
              <FormSubmit />
            )}
          </div>
        </form>
      </SectionContent>
    </section>
  );
}

export { JoinSection };
