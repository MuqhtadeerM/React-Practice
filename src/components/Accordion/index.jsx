// two type of selection, single and complex

import "./styles.css";
import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multi, setMulti] = useState([]); // Stores the multiple vallues

  const handleSingleClick = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    // copying the above state - multi
    let copyMultiple = [...multi];
    const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexofCurrentId);

    if (findIndexofCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexofCurrentId, 1);

    setMulti(copyMultiple);
    console.log(multi, selected);
  };

  return (
    <div className="wrapper">
      {/* This is the Toggle button that enable or disable  */}
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        {enableMultiSelect ? "Enabled" : "Disabled"}
      </button>
      <div className="accordian">
        {/* while using api we use this method to fetch the data from api */}
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div key={index} className="item">
              {/* this enbles the multi selection  */}
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
                className="title"
              >
                <h3> {dataItem.question} </h3>
                <span>+</span>
              </div>

              {/* this will show the data present in the selected item after clicking them */}

              {enableMultiSelect
                ? multi.indexOf(dataItem.id) !== -1 && ( // if true it show the multi selection
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && ( // incase of false it show single selection
                    <div className="content">{dataItem.answer}</div>
                  )}

              {/* This is deficult to understand thats why we use above code */}

              {/* {selected === dataItem.id && multi.indexOf(dataItem.id) !== -1 ? (
                <div>
                  <div className="content">{dataItem.answer}</div>
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>Data Not found</div>
        )}
      </div>
    </div>
  );
}
