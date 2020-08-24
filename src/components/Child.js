import React from "react";

const Child = ({ setCurrentpage, postperpage, length }) => {
  const data = [];
  for (let i = 1; i <= Math.ceil(length / postperpage); i++) {
    data.push(i);
  }
  return (
    <>
      <div className="pagination">
        {data.map((value, index) => {
          return (
            <li key={index}>
              <a
                href="!#"
                onClick={() => {
                  setCurrentpage(value);
                }}
              >
                {value}
              </a>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Child;
