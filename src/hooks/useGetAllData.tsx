// hooks/useIeltsCourse.ts
import { MainApiData } from "@/dataType";
import { useEffect, useState } from "react";

export default function useGetAllData(lang:string) {
  const [data, setData] = useState<MainApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMainData(lang: string) {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
          {
            headers: {
              "X-TENMS-SOURCE-PLATFORM": "web",
            },
          }
        );
        if (!res.ok) throw new Error("Failed to fetch course");
        const json = await res.json();
        setData(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMainData(lang);
  }, [lang]);

  return { data, loading, error };
}
