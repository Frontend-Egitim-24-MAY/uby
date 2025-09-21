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
  }, []);

  if (data.length === 0) {
    return <h1>Yükleniyor </h1>;
  }
  return (
    <div className="container mx-auto">
      {data.map((post, idx) => (
        <Card post={post} key={idx}/>
      ))}
    </div>
  );
}
