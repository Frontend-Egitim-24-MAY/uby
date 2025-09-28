"use client";
import { Card } from "@/components/card";
import { useEffect, useState } from "react";

export default function AdmissionsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("api/post")
        .then((response) => response.json())
        .then((data) => setData(data.data));
    };

    getData();
    console.log(data);
  }, []);

  if (data.length === 0) {
    return <h1>Yükleniyor </h1>;
  }
  return (
    <div className="flex">
        <div className="rotate-90 left-0 absolute font-bold whitespace-nowrap ">
          TÜM KURSLAR
      </div>
      <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-8">
        {data.map((post, idx) => (
          <div className="break-inside-avoid mb-6" key={idx}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
