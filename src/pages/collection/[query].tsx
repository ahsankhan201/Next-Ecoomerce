import FilterationSideBar from "@/components/filterationSidebar/FilterSidebar";
import React from "react";
import TableCus from '../../components/collections/summerCollection//TableCus'
import { useRouter } from "next/router";

const SpecificCollections = () => {
  const router = useRouter();
  const { query } = router.query;
  console.log(query);
  return (
    <>
      <div className="flex row">
        <div className="w-1/4 border-2 ml-5">
          <FilterationSideBar />
        </div>
        <div style={{
          marginLeft: "30px",
          color:"white"
        }}>
          <p className="uppercase text-lg font-bold">{query}</p>
          <TableCus />
        </div>
      </div>
    </>
  );
};

export default SpecificCollections;
