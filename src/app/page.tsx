"use client";

import { useEffect, useState } from "react";
import type { AdvocateDTO } from "@/types/advocate";

export default function Home() {
  const [advocates, setAdvocates] = useState<AdvocateDTO[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<AdvocateDTO[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("/api/advocates")
      .then((response) => {
        response.json()
          .then((jsonResponse: { advocates: AdvocateDTO[] }) => {

            // Safe check for empty advocates
            if (!jsonResponse.advocates || jsonResponse.advocates.length === 0) {
              setAdvocates([]);
              setFilteredAdvocates([]);
              return;
            }

            setAdvocates(jsonResponse.advocates);
            setFilteredAdvocates(jsonResponse.advocates);
          });
      });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchTerm(input);

    const normalizedSearchText = input.toLowerCase().trim();
    const searchTextAsNumber = Number(normalizedSearchText);

    if (normalizedSearchText === '') {
      setFilteredAdvocates(advocates);
      return;
    }

    const filteredSearchResults = advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(normalizedSearchText) ||
        advocate.lastName.toLowerCase().includes(normalizedSearchText) ||
        advocate.city.toLowerCase().includes(normalizedSearchText) ||
        advocate.degree.toLowerCase().includes(normalizedSearchText) ||
        advocate.specialties.some((s) => s.toLowerCase().includes(normalizedSearchText)) ||
        (!isNaN(searchTextAsNumber) && advocate.yearsOfExperience == searchTextAsNumber)
      );
    });

    setFilteredAdvocates(filteredSearchResults);
  };

  const onClick = () => {
    if (advocates.length > 0) {
      setFilteredAdvocates(advocates);
      setSearchTerm('');
    }
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: {searchTerm}
        </p>
        <input
          style={{ border: "1px solid black" }}
          value={searchTerm}
          onChange={onChange} />
        <button onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {(advocate.specialties || []).map((s, idx) => (
                    <div key={`${s}-${idx}`}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
