"use client";

import { useEffect, useMemo, useState } from "react";
import type { AdvocateDTO } from "@/types/advocate";
import AdvocatesTable from "./components/AdvocatesTable";

export default function Home() {
  const [advocates, setAdvocates] = useState<AdvocateDTO[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch advocates from the API
  async function getAdvocates() {
    try {
      const response = await fetch("/api/advocates");
      if (!response.ok) {
        throw new Error("Failed to fetch advocates");
      }
      const jsonResponse: { advocates: AdvocateDTO[] } = await response.json();

      if (!jsonResponse.advocates || jsonResponse.advocates.length === 0) {
        setAdvocates([]);
        return;
      }

      setAdvocates(jsonResponse.advocates);
    }
    catch (error) {
      console.error("Error fetching advocates:", error);
      setAdvocates([]);
    }
  }

  // Filters the advocates[] based on search term
  const filteredAdvocates = useMemo(() => {
    const normalizedSearchText = searchTerm.toLowerCase().trim();
    const searchTermAsNumber = Number(normalizedSearchText);

    if (!normalizedSearchText) return advocates;

    return advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(normalizedSearchText) ||
        advocate.lastName.toLowerCase().includes(normalizedSearchText) ||
        advocate.city.toLowerCase().includes(normalizedSearchText) ||
        advocate.degree.toLowerCase().includes(normalizedSearchText) ||
        advocate.specialties.some((s) => s.toLowerCase().includes(normalizedSearchText)) ||
        (!isNaN(searchTermAsNumber) && advocate.yearsOfExperience === searchTermAsNumber)
      );
    });
  }, [searchTerm, advocates]);

  // Fetch advocates on initial load
  useEffect(() => {
    getAdvocates();
  }, []);

  // Updates searchTerm which triggers filteredAdvocates
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const resetSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 600,
          fontFamily: 'Inter',
          color: '#265b4e'
        }}>
        Solace Advocates
      </h1>
      <br />
      <br />
      <div>
        <p>
          Searching for: {searchTerm}
        </p>
        <p>Search</p>
        <input
          style={{ border: "1px solid black" }}
          value={searchTerm}
          onChange={onChange} />
        <button onClick={resetSearchTerm}>Reset Search</button>
      </div>
      <br />
      <br />
      <AdvocatesTable advocates={filteredAdvocates} />
    </main>
  );
}
