import React from "react";
import { ServicesCards } from "../common/constent";
import ServicesCard from "../common/Card";
export default function Services() {
  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl mx-auto text-white">
        <div>
        <span className=" ml-7 about-arrow text-[#FD0F00] md:hidden block pt-5">WHAT WE OFFER</span>
        <p className="block pt-3 md:hidden">Our core values of innovation and creativity drive all we do</p>
          <h1 className="py-5 text-4xl text-left md:text-center md:text-5xl text-services">
            Our Services
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 py-10 md:grid-cols-3 gap-7">
            {ServicesCards.map((serviceCard) => (
              <ServicesCard
              id={serviceCard.id}
                icon={serviceCard.icon}
                heading={serviceCard.heading}
                desc={serviceCard.desc}
              />
            ))}
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-7xl text-center py-7 text-[#FD0F00]">
              <span className="font-extrabold ">Process</span> <span>we</span>{" "}
              Follow
            </h1>
          </div>
          <div className="py-3 text-center">
            <h3 className="text-2xl py-2 text-[#FD0F00]">Analyse & plan</h3>
            <p className="leading-6 ">
              When your business comes to Estrella Advertising, we value your
              ideas and your requirement for a space to express that business
              idea. We analyse and plan how the idea can be marketed to reach
              the target audience, identifying who the target groups are, who
              are your competitors in this shared space, what your USPs over
              them are which can be capitalised upon, and identifying gaps so as
              to be able to bridge them. The end result is essentially a
              boilerplate common to business objectives, growth projections,
              current marketing standing, new revenue streams and intended brand
              positioning.
            </p>
          </div>

          <div className="py-3 text-center">
            <h3 className="text-2xl py-2 text-[#FD0F00]">Content Creation</h3>
            <p className="leading-6 ">
              We believe that content is king. Marketing as we know it, is now
              content consumption which makes it vital that quality content
              reaches the consumer. We direct our expertise towards an
              omni-channel approach, where the targeted consumer is immersed in
              relevant & valuable content that drives desirable customer action.
            </p>
          </div>

          <div className="py-3 text-center">
            <h3 className="text-2xl py-2 text-[#FD0F00]">Analyse & plan</h3>
            <p className="leading-6 ">
              When your business comes to Estrella Advertising, we value your
              ideas and your requirement for a space to express that business
              idea. We analyse and plan how the idea can be marketed to reach
              the target audience, identifying who the target groups are, who
              are your competitors in this shared space, what your USPs over
              them are which can be capitalised upon, and identifying gaps so as
              to be able to bridge them. The end result is essentially a
              boilerplate common to business objectives, growth projections,
              current marketing standing, new revenue streams and intended brand
              positioning.
            </p>
          </div>

          <div className="py-3 text-center">
            <h3 className="text-2xl py-2 text-[#FD0F00]">
              Brand Strategy & Target marketing
            </h3>
            <p className="leading-6 ">
              We devise a digital strategy that is concerted on a long term
              brand strategy and positioning, and a micro targeted market
              segment. We use SEO, back-links and Social media marketing that
              resonate with the right segments, and qualify leads into
              conversions.
            </p>
          </div>

          <div className="py-3 text-center">
            <h3 className="text-2xl py-2 text-[#FD0F00]">
              Optimise & Remarket
            </h3>
            <p className="leading-6 ">
              Once we have our digital strategy on track, we work on optimising
              the digital network tools to gain and convert it into a
              transactional prospect. We use re-marketing campaigns and online
              content marketing that develop brand affinity and customer
              loyalty, that converts into up-selling and/or referrals. The best
              digital agencies in the world swear by remarketing techniques that
              help achieve more conversions.
            </p>
          </div>

          <div className="py-3 text-center">
            <h3 className="text-2xl py-2 text-[#FD0F00]">Track & repeat</h3>
            <p className="leading-6 ">
              We consider metrics and analytics crucial that help monitor our
              success, identify areas that need addressing, which approach
              matches our projections and produced intended results, and use
              these metrics and analytics to draw timelines, projections,
              metrics, budgets, process flow, targets and accountability.
            </p>
          </div>

          <div className="py-3 text-center">
            <h3 className="text-2xl py-2 text-[#FD0F00]">Support</h3>
            <p className="leading-6 ">
              Once your service is tested and delivered, we'll continueto
              provide on-going support when and however needed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
