import React, { useState } from "react";

import SearchTypeahead from "./SearchTypeahead";
import Map from "./Map";
import postalCodes from "../config/postal-codes.json";
import VirtualizedTable from "./VirtualizedTable";
import { Container, Cover, Section, Heading, NoResults } from "./styles";

const Main = () => {
  const [currentData, setCurrentData] = useState([]);
  const [data, setData] = useState({
    filteredOptions: [],
    value: "",
  });

  return (
    <Container>
      <Heading>Postal Codes Locator</Heading>
      <Cover>
        <Section className="left">
          <SearchTypeahead options={postalCodes} onFilteredData={setData} />
          {data.value && data.filteredOptions.length === 0 && (
            <NoResults>
              No records match the pattern, thus showing all the records.
            </NoResults>
          )}
          <VirtualizedTable
            data={
              data.filteredOptions.length > 0
                ? data.filteredOptions
                : postalCodes
            }
            onCurrentData={setCurrentData}
          />
        </Section>
        <Section className="right">
          <Map markerLocations={currentData} />
        </Section>
      </Cover>
    </Container>
  );
};

export default Main;
