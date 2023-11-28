import { Table, Th, Td, Tr } from './transactionHistory.styled';
import PropTypes from 'prop-types';
export const TransactionHistory = items => {
  return (
    <div>
      <Table>
        <MurkapTableHead />
        <MarkupTransactionTable {...items} />
      </Table>
    </div>
  );
};

const MurkapTableHead = () => {
  return (
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </thead>
  );
};

function MarkupTransactionTable({ items }) {
  const MarkupTable = items.map(items => {
    return (
      <Tr key={items.id}>
        <Td>{items.type}</Td>
        <Td>{items.amount}</Td>
        <Td>{items.currency}</Td>
      </Tr>
    );
  });
  return <tbody>{MarkupTable}</tbody>;
}
MarkupTransactionTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
