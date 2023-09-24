import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const CityData = [
  { id: 0, name: "Select Your City" },
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Sylhet" },
  { id: 3, name: "Chittagong" },
  { id: 4, name: "CoxBazar" },
  { id: 5, name: "Mumbai" },
  { id: 6, name: "kolkata" },
];

const CityDataEnd = [
  { id: 0, name: "Select Your City" },
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Sylhet" },
  { id: 3, name: "Chittagong" },
  { id: 4, name: "CoxBazar" },
  { id: 5, name: "Mumbai" },
  { id: 6, name: "kolkata" },
];

const TicketAvailable = () => {
  const [selected, setSelected] = useState(CityData[0]);
  const [query, setQuery] = useState("");
  const [selectedEnd, setSelectedEnd] = useState(CityData[0]);
  const [queryEnd, setQueryEnd] = useState("");
  const [date,setDate] = useState();

  const filteredCity =
    query === ""
      ? CityData
      : CityData.filter((myCity) =>
          myCity.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredCityEnd =
    queryEnd === ""
      ? CityDataEnd
      : CityDataEnd.filter((myCityEnd) =>
          myCityEnd.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="m-5 rounded-md mb-11 bg-blue-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="m-7 pl-10 text-2xl font-bold">Find Your Ticket</h1>
        <button className="btn btn-primary m-5 text-white">Oneway</button>
        <button className="btn btn-primary m-5 text-white">Round Trip</button>
      </div>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="top-16 w-72">
            <h3 className="text-xl font-bold">From</h3>
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(myCity) => myCity.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredCity.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredCity.map((myCity) => (
                        <Combobox.Option
                          key={myCity.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-teal-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={myCity}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {myCity.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
        <div>
          <div className="top-16 w-72">
            <h3 className="text-xl font-bold">To</h3>
            <Combobox value={selectedEnd} onChange={setSelectedEnd}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(myCityEnd) => myCityEnd.name}
                    onChange={(event) => setQueryEnd(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQueryEnd("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredCity.length === 0 && queryEnd !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredCity.map((myCityEnd) => (
                        <Combobox.Option
                          key={myCityEnd.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-teal-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={myCityEnd}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {myCityEnd.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-xl font-bold">Departure</h3>
        <input className="border-2 border-indigo-600 " type='date' onchange={e=>setDate(e.target.value)}/>

        </div>
      </div>
      <div className="grid p-3 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">Person</h3>
          <select className="select select-bordered">
            <option>No Person</option>
            <option>1 Person</option>
            <option>2 Person</option>
            <option>3 Person</option>
            <option>4 Person</option>
            <option>5 Person</option>
          </select>
        </div>
        <div className="p-2">
          <h3 className="text-xl font-bold">Return</h3>
          <input className="border-2 border-indigo-600 " type='date' onchange={e=>setDate(e.target.value)}/>
        </div>
      </div>
      <div className="grid p-5 place-items-center pb-5" >
      <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default TicketAvailable;
