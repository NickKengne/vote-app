import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden lg:pb-[90px] ">
      <div className="container mx-auto">
        <div className="pt-5" id="pricing">
          <div className="mx-auto mt-4 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="absolute z-50 h-48 bg-transparent opacity-10 backdrop-blur-md"></div>
              <div className="absolute inset-auto z-50 h-36 w-[28rem] translate-y-10 rounded-full bg-primary opacity-30 blur-3xl"></div>
              <div className="absolute bottom-0 z-50 h-48 bg-transparent opacity-10 backdrop-blur-md"></div>
              <div className="absolute inset-auto z-50 h-36 w-[28rem] bottom-9 right-0 rounded-full bg-primary opacity-30 blur-3xl"></div>
              <h1 className="text-primary font-semibold leading-7 text-indigo-400">
                Pricing
              </h1>
              <p className="mt-2 text-4xl font-bold tracking-tight text-base sm:text-5xl">
                Packages adapted to the needs of event professionals
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
              Choose the pack that works best
            </p>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {/* First Product */}
              <PricingCard
                description="Start selling tickets in minutes"
                price={0}
                type="Free"
                buttonText="Start free"
                feature1="50 tickets"
                feature2="essential ticketing functionalities"
                feature3="Only one type of ticket"
              />
              {/* Second Product */}
              <PricingCard
                description="Personalize, manage and develop your events"
                price={50}
                type="Adventure"
                subscription={150}
                buttonText="Start trial"
                feature1="Everything included in free plus"
                feature2="+150 tickets per event"
                feature3="2 types of tickets"
              />
              {/* Third Product */}
              <PricingCard
                description="Develop your events with advanced solutions."
                price={125}
                type="Pro"
                buttonText="Start"
                feature1="Everything included in adventure plus"
                feature2="500+ tickets per month"
                feature3="Unlimited type of ticket"
                feature4="Room plan"
                isPopular={true}
              />
              <PricingCard
                description="Custom solutions for large events."
                type="Custom"
                buttonText="Coming soon"
                feature1="A consultation to optimize events and their pricing strategy"
                feature2="Unlimited tickets"
                feature3="ia support and marketing tools"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

export const PricingCard = ({
  type,
  description,
  price,
  buttonText,
  feature1,
  feature2,
  feature3,
  isPopular,
  feature4,
}: any) => {
  return (
    <>
      {isPopular ? (
        <div className="bg-white/5 ring-2 ring-primary rounded-3xl p-8 xl:p-10 transform scale-105 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
          <div className="flex items-baseline justify-between gap-x-4">
            <h2
              id={type}
              className="text-2xl font-semibold leading-8 dark:text-white"
            >
              {type}
            </h2>
            <p className="rounded-full bg-primary px-4 py-1 text-xs font-semibold leading-2 text-white">
              {" "}
              Popular
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 dark:text-gray-300">
            {description}
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-3xl font-bold tracking-tight dark:text-white">
              € {price} / month
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-300" />
          </p>
          <a
            href="/order"
            aria-describedby={type}
            className="bg-primary text-white shadow-sm hover:bg-primary focus-visible:outline-primary mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {buttonText}
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 dark:text-gray-300 xl:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {feature1}
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {feature2}
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {feature3}
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {feature4}
            </li>
          </ul>
        </div>
      ) : (
        <div className="border-gray-300 border dark:border-none  rounded-3xl p-8 xl:p-10">
          <h2
            id={type}
            className="text-2xl font-semibold leading-8 dark:text-white"
          >
            {type}
          </h2>
          <p className="mt-4 text-sm leading-6 dark:text-gray-300">
            {description}
          </p>
          {(price || price == 0) && (
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-3xl font-bold tracking-tight dark:text-white">
                € {price} / event
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-300" />
            </p>
          )}
          <a
            href="/order"
            aria-describedby={type}
            className="bg-dark-500 dark:text-white border mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
          >
            {buttonText}
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 dark:text-gray-300 xl:mt-10"
          >
            {feature1 && (
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none dark:text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature1}
              </li>
            )}
            {feature2 && (
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none dark:text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature2}
              </li>
            )}
            {feature3 && (
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none dark:text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature3}
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};
