import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import CampaignContract from '../ethereum/campaign';

const RequestRow = (props) => {

  const { Row, Cell } = Table;
  const { id, request, approversCount } = props;
  const readyToFinalize = request.approvalCount > approversCount / 2;

  const handleApprove = async () => {
    const campaignContract = CampaignContract(props.address);
    const accounts = await web3.eth.getAccounts();

    await campaignContract.methods.approveRequest(props.id).send({
      from: accounts[0]
    })
  }

  const handleFinalize = async () => {
    const campaignContract = CampaignContract(props.address);

    const accounts = await web3.eth.getAccounts();
    await campaignContract.methods.finalizeRequest(props.id).send({
      from: accounts[0]
    })
  }

  return (
    <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>{request.approvalCount}/{approversCount}</Cell>
      <Cell>
        {!request.complete &&
          <Button color="green" basic onClick={handleApprove}>Approve</Button>
        }
      </Cell>
      <Cell>
        {!request.complete &&
          <Button color="teal" basic onClick={handleFinalize}>Finalize</Button>
        }
      </Cell>
    </Row>
  )
}

export default RequestRow;