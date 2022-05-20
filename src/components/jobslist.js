import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 900,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 1240,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 800,
    },
  ]);

  console.log(navigator.language);
  const intl = useIntl();
  return (
    
    <div>
      <table className="table">
        <thead className={intl.formatMessage({ id: 'BGColor' })} >
          <tr>
            <th scope="col">
              <font color={intl.formatMessage({ id: 'Color' })}>
                #
              </font></th>
            <th scope="col" color="white">
              <font color={intl.formatMessage({ id: 'Color' })}>
                <FormattedMessage id="Position"/>
              </font>              
            </th>
            <th scope="col">
            <font color={intl.formatMessage({ id: 'Color' })}>
              <FormattedMessage id="Company"/>
            </font>
              
            </th>
            <th scope="col">
            <font color={intl.formatMessage({ id: 'Color' })}>
              <FormattedMessage id="Salary"/>
            </font>
            </th>
            <th scope="col">
            <font color={intl.formatMessage({ id: 'Color' })}>
              <FormattedMessage id="City"/>
            </font>
            </th>
            <th scope="col">
            <font color={intl.formatMessage({ id: 'Color' })}>
              <FormattedMessage id="PublicationDate"/>
            </font>
            </th>
            <th scope="col">
            <font color={intl.formatMessage({ id: 'Color' })}>
              <FormattedMessage id="Views"/>
            </font>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
