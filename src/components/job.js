import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural, useIntl} from 'react-intl';

const Job = (props) => {
  const intl = useIntl();
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} <FormattedPlural 
        one={intl.formatMessage({ id: 'million.one' })} 
        other={intl.formatMessage({ id: 'million.many' })}
        value={props.offer.salary} 
      /></td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.visits}
          format='USD'
        />
      </td>
    </tr>
  );
  
};

export default Job;
