import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Paging = (props) => {
  const [page, setPage] = useState(1);
  const data = props.data;

  const handlePageChange = (page) => {
    setPage(page);
    console.log(`now page: ${page}`);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={data.list.length}
      pageRangeDisplayed={5}
      hideNavigation={true}
      hideFirstLastPages={true}
      onChange={handlePageChange}
    />
  );
};

export default Paging;