import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Paging = (props) => {
  const [page, setPage] = useState(1);
  const data = props.data;

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={data.list.length}
      pageRangeDisplayed={10}
      hideNavigation={true}
      hideFirstLastPages={true}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
