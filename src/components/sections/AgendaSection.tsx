import React , {useState} from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { SectionContent } from "../section-content";
import "./style.css"
const AgendaSection = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  let hoverTimeout: NodeJS.Timeout;

  const handleMouseEnter = (item: string) => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => setHoveredItem(item), 100); // delay by 100ms
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => setHoveredItem(null), 100); // delay by 100ms
  };
 
  return (
    <section id="agenda" className="bg-[#F8F9FA] scroll-mt-52">
      <SectionContent
        className={"flex flex-col items-center py-20 gap-10 px-14 md:px-[90px]"}
      >
        <div className="flex flex-col  w-full text-center">
          <h3 className="text-7xl font-bold  ">     Agenda</h3>
        </div>
  <div className="flex justify-between px-10 w-full hidden md:flex border-b bg-white rounded-xl px-10 py-5">
    <h3 className="w-1/4 text-2xl font-bold ">Session</h3>
    <h3 className="w-1/4 text-2xl font-bold ">Instructor</h3>
    <h3 className="w-1/4 text-2xl font-bold ">Title</h3>
    <h3 className="w-1/4 text-2xl font-bold "> Content</h3>
    </div>
        <Accordion    collapsible        value={hoveredItem}
          onValueChange={setHoveredItem}
          type="single"
       
          className="w-full flex flex-col gap-8"
        >
    
        
        <AccordionItem
            value="item-1"
            className="bg-white rounded-xl px-10 py-3 AccordionItem"
            
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger "           
          >
                          <div>
                          
                              <p className=" text-lg">Session 01</p>
                            </div>
           <div>
 
            <p className=" text-lg hidden md:block">Khalid Al Ameri</p>
           </div>
           <div>
      
            <p className=" text-lg hidden md:block">Scripting & Storytelling</p>
           </div>
           <div >
 
            <p className="  font-light text-lg hidden md:block"> 01. Introduction into Storytelling </p> 
           </div>
            </AccordionTrigger>
             <AccordionContent className="text-2xl font-light flex flex-col align-end ">
                          <div className="Accordion-Content  ms-auto w-1/4">
                                                         <p className="text-2xl font-bold  md:text-lg block md:hidden mt-5">Title:</p>

                               <p className="text-2xl  md:text-lg block md:hidden mt-5">Scripting & Storytelling</p>
                                                             <p className="font-bold   text-lg text-center md:text-start my-5 visible md:hidden"> Name: </p>

                              <p className="  font-light text-lg text-center md:text-start my-5 visible md:hidden"> Khalid Al Ameri </p>
            <p className="  font-bold mb-5 text-lg block md:hidden"> Content : </p> 
            <p className="  font-light text-lg block md:hidden"> 01. Introduction into Storytelling </p> 

                          </div>
            </AccordionContent> 
     
             
          </AccordionItem>
        <AccordionItem
            value="item-2"
            className="bg-white rounded-xl px-10 py-3"        
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger"             onMouseEnter={() => handleMouseEnter("item-2")} // Open on hover with delay
              onMouseLeave={handleMouseLeave}  
          >
                          <div>
                          
                              <p className=" text-lg">Session 02</p>
                            </div>
           <div>
 
            <p className=" text-lg  hidden md:block">Taline AlRasheed</p>
           </div>
           <div>
      
            <p className=" text-lg  hidden md:block">Scripting & Storytelling</p>
           </div>
           <div >
 
            <p className="  font-light text-lg  hidden md:block"> 01. Crafting Stories with Purpose </p> 
           </div>
            </AccordionTrigger>
                  {hoveredItem === "item-2"&&(
      <AccordionContent className="text-2xl font-light flex flex-col align-end ">

                  <p className="text-2xl block md:hidden mt-5 text-center font-bold">Title : </p>
                  <p className="text-2xl block md:hidden mt-5 text-center">Scripting & Storytelling</p>
                   <p className="text-2xl  md:text-lg  block md:hidden mt-5 text-center font-bold">Name : </p>
                   <p className="text-2xl  md:text-lg  block md:hidden my-5 text-center">Taline AlRasheed</p>
                          <div className="Accordion-Content ms-auto text-center w-1/4">

                                                                                <p className="  font-bold mb-5 text-lg block md:hidden">Content :  </p> 
                                                                                <p className="  font-light text-lg block md:hidden mb-4 md:mb-0">01. Crafting Stories with Purpose </p> 

                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 02. Mastering the 3-Act Structure </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 03. Engaging Vlog Storytelling Techniques </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 04. Creating Impactful Short-Form Content </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 05. Exploring Universal Plotlines</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 06. Harnessing AI for Storytelling</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 07. Interactive Q&A and Hands-On Assignment</p>
                          </div>
            </AccordionContent> 
                  )}
            
         
          </AccordionItem>
      
        <AccordionItem     
            value="item-3"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger       
           className="text-2xl font-bold Accordion-Trigger"               onMouseEnter={() => handleMouseEnter("item-3")}  
              onMouseLeave={handleMouseLeave}                 >
                          <div>
                          
                              <p className=" text-lg">Session 03</p>
                            </div>
           <div>
 
            <p className=" text-lg  hidden md:block">Ahmed Ali</p>
           </div>
           <div>
      
            <p className=" text-lg  hidden md:block">Filming & Editing</p>
           </div>
           <div >
 
            <p className="  font-light text-lg  hidden md:block">Filming </p> 
           </div>
            </AccordionTrigger>
           {
            hoveredItem==="item-3"&&(
                  <AccordionContent className="text-2xl font-light flex flex-col align-end ">
                            <p className="text-2xl  block md:hidden mt-5 text-center md:text-start font-bold">Tilte :</p>
                            <p className="text-2xl  block md:hidden mt-5 text-center md:text-start">Filming & Editing</p>
                     <p className="text-2xl font-bold  md:text-lg  block md:hidden mt-5 text-center md:text-start">Name : </p>
                     <p className="text-2xl  md:text-lg  block md:hidden my-5 text-center md:text-start">Ahmed Ali</p>

                          <div className="Accordion-Content ms-auto w-1/4">
                                                      <p className="  font-bold mb-5 text-lg block md:hidden text-center md:text-start">Content :  </p> 
                                                      <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">Filming </p> 

                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">01.Introduction </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 02. Filming Fundamentals</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 03. Filming with Mobile Phones </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. Filming with Professional Equipments </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 05. Lights & Audio</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 06. Best Practices</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 07. Excercise and Q&A</p>
                          </div>
            </AccordionContent>
            )
           }
          </AccordionItem>
        <AccordionItem     
            value="item-4"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger 
           className="text-2xl font-bold Accordion-Trigger"    onMouseEnter={() => handleMouseEnter("item-4")}  
              onMouseLeave={handleMouseLeave}       >
                          <div>
                          
                              <p className=" text-lg">Session 04</p>
                            </div>
           <div>
 
            <p className=" text-lg hidden md:block">Ahmed Ali</p>
           </div>
           <div>
      
            <p className=" text-lg hidden md:block">Filming & Editing</p>
           </div>
           <div >
 
            <p className="  font-light text-lg hidden md:block">Editing </p> 
           </div>
            </AccordionTrigger>
           {
            hoveredItem==="item-4"&&(
              <AccordionContent className="text-2xl font-light flex flex-col align-end ">
                    <p className="text-2xl font-bold    block md:hidden mt-5 text-center md:text-start">Title " </p>
                    <p className="text-2xl    block md:hidden mt-5 text-center md:text-start">Filming & Editing</p>
                    <p className=" text-2xl block md:hidden mt-5 text-center md:text-start font-bold">Name : </p>
                    <p className=" text-2xl block md:hidden my-5 text-center md:text-start">Ahmed Ali</p>
                          <div className="Accordion-Content ms-auto w-1/4">
                            <p className="  mb-5 text-lg block md:hidden text-center md:text-start font-bold">Content :  </p> 
                            <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">Editing </p> 
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">01.Introduction </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 02. Editing Fundamentals</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">03. Editing tools & Apps </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. Best Practices </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">05. Excercise and Q&A</p>
                    
                          </div>
            </AccordionContent>
            )
           }
          </AccordionItem>
      
        <AccordionItem    
            value="item-5"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger"    onMouseEnter={() => handleMouseEnter("item-5")}  
              onMouseLeave={handleMouseLeave}    
          >
                          <div>
                          
                              <p className=" text-lg">Session 05</p>
                            </div>
           <div>
 
            <p className=" text-lg  hidden md:block">Maitha Mohammed</p>
           </div>
           <div>
      
            <p className=" text-lg  hidden md:block">Workshop: to write script & shoot</p>
           </div>
           <div >
 
            <p className="  font-light text-lg  hidden md:block">01. Brief: Scriptwriting </p> 
           </div>
            </AccordionTrigger>
             {hoveredItem === "item-5"&&(<AccordionContent className="text-2xl font-light flex flex-col align-end ">
              <p className=" text-2xl   block md:hidden mt-5 text-center md:text-start font-bold">title : </p>
              <p className=" text-2xl   block md:hidden mt-5 text-center md:text-start">Workshop: to write script & shoot</p>
                        <p className=" text-2xl font-bold  md:text-lg  block md:hidden mt-5 text-center md:text-start">Name : </p>
                        <p className=" text-2xl  md:text-lg  block md:hidden my-5 text-center md:text-start">Maitha Mohammed</p>
                          <div className="Accordion-Content ms-auto w-1/4">
                                                    <p className="  font-bold mb-5 text-lg block md:hidden text-center md:text-start">Content :  </p> 
                                                    <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">01. Brief: Scriptwriting </p> 

                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">02. Brief: Filming  </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 03. Storyboarding</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. On-Set Best Practices </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">05. Brief: Editing </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">06. Q&A and Guidance</p>
                    
                          </div>
            </AccordionContent>)}

           
          </AccordionItem>
      
        <AccordionItem
            value="item-6"    
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger"    onMouseEnter={() => handleMouseEnter("item-6")}  
              onMouseLeave={handleMouseLeave}     
          >
                          <div>
                          
                              <p className=" text-lg">Session 06</p>
                            </div>
           <div>
 
            <p className=" text-lg hidden md:block">Bader AlEssa</p>
           </div>
           <div>
      
            <p className=" text-lg hidden md:block">Podcast & Hosting Rules</p>
           </div>
           <div >
 
            <p className="  font-light text-lg hidden  md:block">01. Introduction </p> 
           </div>
            </AccordionTrigger>
             {hoveredItem === "item-6"&&(<AccordionContent className="text-2xl font-light flex flex-col align-end ">
                    <p className="text-2xl   md:text-lg block md:hidden mt-5 text-center md:text-start font-bold  ">title : </p>
                    <p className="text-2xl   md:text-lg block md:hidden my-5 text-center md:text-start ">Podcast & Hosting Rules</p>
             <p className=" text-2xl font-bold  block md:hidden mb-5 text-center md:text-start">Name : </p>
             <p className=" text-2xl  block md:hidden mb-5 text-center md:text-start">Bader AlEssa</p>
                          <div className="Accordion-Content ms-auto w-1/4">
                          <p className="  font-bold text-lg block md:hidden text-center md:text-start">Content : </p> 
                          <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">01. Introduction </p> 
                              <p className="  font-light text-lg   text-center md:text-start mb-4 md:mb-0">02. Know your audience  </p>
                              <p className="  font-light text-lg  "> 03. Know your guest</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. Preparation </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">.5. Monetization</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">06. Q&A and Closing Remarks</p>
                    
                          </div>
            </AccordionContent>)}
           
          </AccordionItem>
        <AccordionItem     
            value="item-7"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger"    onMouseEnter={() => handleMouseEnter("item-7")}  
              onMouseLeave={handleMouseLeave}    
           >
                          <div>
                          
                              <p className=" text-lg">Session 07</p>
                            </div>
           <div>
 
            <p className=" text-lg hidden md:block">  Ahmed Khalifa</p>
           </div>
           <div>
      
            <p className=" text-lg hidden md:block"> Visual Identity and Authentic Voice</p>
           </div>
           <div >
 
            <p className="  font-light text-lg hidden md:block">01. Understanding Personal Branding </p> 
           </div>
            </AccordionTrigger>
               {hoveredItem === "item-7"&&(       <AccordionContent className="text-2xl font-light flex flex-col align-end ">
                        <p className=" text-2xl  md:text-lg block md:hidden mt-5 text-center md:text-start font-bold"> Title: </p>
                        <p className=" text-2xl  md:text-lg block md:hidden mt-5 text-center md:text-start"> Visual Identity and Authentic Voice</p>
            <p className=" text-2xl block md:hidden my-5 text-center md:text-start font-bold "> Name : </p>
            <p className=" text-2xl block md:hidden mb-5  text-center md:text-start">  Ahmed Khalifa</p>

                          <div className="Accordion-Content ms-auto w-1/4">
                                                    <p className="  font-bold mb-5 text-lg block md:hidden text-center md:text-start">Content :  </p> 
                                                    <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">01. Understanding Personal Branding  </p> 

                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">02. Exploring Branding Fundamentals </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0"> 03. Diving into Visual Identity</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. Crafting Your Authentic Brand Voice </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">05. Faceless Content Strategy </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">06. Interactive Workshop: Building Your Personal Brand</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">07. Q&A and Closing Remarks</p>
                    
                          </div>
            </AccordionContent>)}
    
          </AccordionItem>
        <AccordionItem
            value="item-8"     
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger"   onMouseEnter={() => handleMouseEnter("item-8")}  
              onMouseLeave={handleMouseLeave}    
          >
                          <div>
                          
                              <p className=" text-lg">Session 08</p>
                            </div>
           <div>
 
            <p className=" text-lg hidden md:block"> Ali Rais</p>
           </div>
           <div>
      
            <p className=" text-lg hidden md:block"> Social media strategy & Management</p>
           </div>
           <div >
 
            <p className="  font-light text-lg hidden md:block">01. Content Planning</p> 
           </div>
            </AccordionTrigger>
              {hoveredItem === "item-8"&&(  <AccordionContent className="text-2xl font-light flex flex-col align-end ">
                        <p className="text-2xl  md:text-lg block md:hidden mt-5 font-bold  text-center md:text-start">Title : </p>
                        <p className="text-2xl  md:text-lg block md:hidden mt-5 text-center md:text-start"> Social media strategy & Management</p>
                                    <p className=" text-2xl font-bold  block md:hidden mt-5 text-center md:text-start ">  Name : </p>
                                    <p className=" text-2xl block md:hidden my-5 text-center md:text-start "> Ali Rais</p>


                          <div className="Accordion-Content ms-auto w-1/4">
                              <p className="  font-bold mb-5 text-lg block md:hidden text-center md:text-start">Content  : </p> 
                              <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">01. Content Planning</p> 
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">02. Content Strategy Foundation</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">03. Content Strategy Framework</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. Brand Core</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">05. Content Development Process </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">06. Content Balance</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">07. Content Grid</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">08. Q&A and Closing Remarks</p>
                    
                          </div>
            </AccordionContent> )}
          
          </AccordionItem>
        <AccordionItem
            value="item-9"     
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger"    onMouseEnter={() => handleMouseEnter("item-9")}  
              onMouseLeave={handleMouseLeave}    
          >
                          <div>
                          
                              <p className=" text-lg">Session 09</p>
                            </div>
           <div>
 
            <p className=" text-lg hidden md:block"> Alex Ghanem</p>
           </div>
           <div>
      
            <p className=" text-lg hidden md:block"> Brand Partnerships & Responsibilities</p>
           </div>
           <div >
 
            <p className="  font-light text-lg hidden md:block">01. Brands Partnership</p> 
           </div>
            </AccordionTrigger>
               {hoveredItem === "item-9"&&(     <AccordionContent className="text-2xl font-light flex flex-col align-end ">
                        <p className=" text-2xl font-bold  md:text-lg  block md:hidden mt-5 text-center md:text-start"> Title : </p>
                        <p className=" text-2xl  md:text-lg  block md:hidden mt-5 text-center md:text-start"> Brand Partnerships & Responsibilities</p>
            <p className="text-2xl block md:hidden mt-5 text-center md:text-start font-bold "> Name : </p>
            <p className="text-2xl block md:hidden my-5 text-center md:text-start"> Alex Ghanem</p>

                          <div className="Accordion-Content ms-auto w-1/4">

                                                        <p className="  font-bold mb-5 text-lg block md:hidden text-center md:text-start">Content : </p> 
                                                        <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">01. Brands Partnership</p> 

                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">02. The Evolution of Influencer Marketing</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">03. Define Your Brand, Industry and Rate</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. Social Media Presence</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">05. Campaign Execution </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">06. Content Balance</p>
                          
                    
                          </div>
            </AccordionContent> )}
      
          </AccordionItem>
      
        <AccordionItem
            value="item-10"    
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold Accordion-Trigger"    onMouseEnter={() => handleMouseEnter("item-10")}  
              onMouseLeave={handleMouseLeave}    
          >
                          <div>
                          
                              <p className=" text-lg">Session 10</p>
                            </div>
           <div>
 
            <p className=" text-lg hidden md:block"> Reham   Vlosca</p>
           </div>
           <div>
      
            <p className=" text-lg hidden md:block"> Content Creator Journey </p>
           </div>
           <div >
 
            <p className="  font-light text-lg hidden md:block">01. Content Creation Steps</p> 
           </div>
            </AccordionTrigger>
              {hoveredItem === "item-10"&&(  <AccordionContent className="text-2xl font-light  flex flex-col align-end ">
                        <p className="text-2xl font-bold   md:text-lg block md:hidden mt-5 text-center md:text-start"> Title : </p>
                        <p className="text-2xl  md:text-lg block md:hidden mt-5 text-center md:text-start"> Content Creator Journey </p>
                                    <p className="text-2xl font-bold  block md:hidden mt-5 text-center md:text-start">Name : </p>
                                    <p className="text-2xl block md:hidden my-5 text-center md:text-start"> Reham   Vlosca</p>


                          <div className="Accordion-Content ms-auto w-1/4">
                              <p className="  font-bold text-lg block md:hidden text-center mb-5  md:text-start">Content : </p> 
                              <p className="  font-light text-lg block md:hidden text-center md:text-start mb-4 md:mb-0">01. Content Creation Steps</p> 
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">02. Your Persona</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">03. Different Social Media Platforms</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">04. Set Your Priorities Straight</p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">05. Your Goals </p>
                              <p className="  font-light text-lg text-center md:text-start mb-4 md:mb-0">06. Q&A and Closing Remarks</p>
                          
                    
                          </div>
            </AccordionContent>)}
         
          </AccordionItem>
      
 
 

        </Accordion>
      </SectionContent>
    </section>
  )
}

export  {AgendaSection}