"use client";

import { Input } from "../input";
import { Label } from "../label";
import { Checkbox } from "../checkbox";
import { signup } from "@/app/actions";
import { cn } from "@/lib/utils";
import { FormSubmit } from "../form-submit"
 
;
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { SectionContent } from "../section-content";
import DOMPurify from 'dompurify';

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
        <form action={formAction} className="flex flex-col items-center gap-20"  id="enquiryForm" >
          <div className="flex flex-col items-start w-full text-start gap-2">
            <h3 className="text-7xl font-bold">JOIN US ONLINE, SIGN-UP FOR FREE</h3>
            <p className="text-2xl font-light text-[#828282]">
              Sessions available in English and Arabic.
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
              <select
                required
                name="country"
                defaultValue=""
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  "bg-[#E9EAEF] h-24 ps-5 rounded-md font-extralight text-2xl invalid:text-[#8D8C8C] border-e-[16px]",
                )}
              >
                <option value="" disabled>
                  Country of residence *
                </option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Egypt">Egypt</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Jordan">Jordan</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Oman">Oman</option>
                <option value="Palestine">Palestine</option>
                <option value="Qatar">Qatar</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Syria">Syria</option>
                <option value="Yemen">Yemen</option>
              </select>
             
              <select
                required
                name="code"
                defaultValue=""
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  "bg-[#E9EAEF] h-24 ps-5 rounded-md font-extralight text-2xl invalid:text-[#8D8C8C] border-e-[16px]",
                )}
              >
                <option value="" disabled>
                  Country code *
                </option>
                <option value="+971">+971</option>
                <option value="+973">+973</option>
                <option value="+20">+20</option>
                <option value="+98">+98</option>
                <option value="+964">+964</option>
                <option value="+962">+962</option>
                <option value="+965">+965</option>
                <option value="+961">+961</option>
                <option value="+968">+968</option>
                <option value="+970">+970</option>
                <option value="+974">+974</option>
                <option value="+966">+966</option>
                <option value="+963">+963</option>
                <option value="+967">+967</option>
              </select>
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
              
              {isOtherIndustry ? (
                  <Input
                      name="industry-other"
                      required
                      placeholder="Industry ( Other ) *"
                      className="bg-[#E9EAEF] h-24 px-5 rounded-md font-extralight text-2xl"
                      style={{ display: 'none' }}  // Hide the conditional Input
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
