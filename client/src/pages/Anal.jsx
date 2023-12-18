import React from "react";
import TableauReport from "tableau-react";

const Anal = () => {
    const options = {
        // url: "https://public.tableau.com/views/Charity2/Dashboard1",
        width: "2000px",
        height: "2000px",
        // hideTabs: true,
        hideToolbar: false,
        // ... other options ...
      };
  return(
  <div className="">
    <TableauReport url="https://public.tableau.com/views/ACNCAIS2014ALL/OVERVIEW?:language=en-US&:display_count=n&:origin=viz_share_link" options={options} />
  </div>
  );
};

export default Anal;
