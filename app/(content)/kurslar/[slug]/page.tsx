"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SpecificCourse() {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const setter = async () => {
    const res = await fetch(`/api/course?slug=${slug}`);
    if (!res.ok) {
      alert("network issue");
      return;
    }
    const send = await res.json();
    setData(send.data);
  };
  useEffect(() => {
    setter();
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div>
        <p>Yükleniyor</p>
      </div>
    );
  } else {
    return <div>{JSON.stringify(data, null, 2)}</div>;
  }
}
