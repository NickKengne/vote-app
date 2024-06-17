import React, { Suspense } from "react";
import TableElectionResult from "../components/TableElectionResult";
import { API_BASE_URL } from "@/config/axios";
import Loader from "@/components/Loader";
import AreaPlotChart from "../components/AreaPlotChart";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const electionResult = await fetch(API_BASE_URL + `/resultat/${id}`)
    .then((res) => res.json())
    .then((data) => data);

  const election = await fetch(API_BASE_URL + `/election/${id}`)
    .then((res) => res.json())
    .then((data) => data);

  return (
    <div className="w-full h-full px-[50px] flex flex-col justify-center items-center pt-[30px]">
      <p className="text-center text-3xl font-bold">
        {election?.name} Results {election.year} 🏆
      </p>
      <div className="grid">
        <Suspense fallback={<Loader />}>
          <TableElectionResult data={electionResult} />
        </Suspense>
      </div>
    </div>
  );
}
