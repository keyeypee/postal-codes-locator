import React from "react";

import { Table, Column } from "react-virtualized";

import debounce from "../../utils/debounce";
import { Container } from "./styles";

const VirtualizedTable = ({ data, onCurrentData }) => {
  const onRowsRendered = (r) => {
    const requiredArray =
      r.endIndex !== data.length - 1
        ? data.slice(r.startIndex, r.stopIndex + 1)
        : data.slice(r.startIndex, r.stopIndex);
    onCurrentData(requiredArray);
  };

  return (
    <Container>
      <Table
        width={720}
        height={519}
        headerHeight={40}
        rowHeight={40}
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
        onRowsRendered={debounce(onRowsRendered, 300)}
      >
        <Column label="Name" dataKey="name" />
        <Column label="Postal Code" dataKey="postal_code" />
        <Column label="Latitude" dataKey="latitude" />
        <Column label="Longitude" dataKey="longitude" />
      </Table>
    </Container>
  );
};

export default VirtualizedTable;
