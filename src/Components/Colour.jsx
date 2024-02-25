import React from 'react';
import spiderman from './spiderman.jpg';
import TableComponent from './TableComponent';
import balebat from './balebat.jpg';
const TableComponents = () => {
  const contents = [
    { name: 'spider_man', description: 'Yenga appa sangi illa, Mentalan than...',pic:spiderman,post:balebat,com:10,liked:293,view:'1.2 M'}
  ];

  return (
    <div>
      {contents.map((data, index) => (
        <TableComponent key={index} {...data}/>
      ))}
    </div>
  );
};

export default TableComponents;
