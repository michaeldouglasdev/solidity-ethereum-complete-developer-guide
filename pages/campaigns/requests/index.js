import { useRouter } from 'next/router';
import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Layout } from '../../../components/layout';
import RequestRow from '../../../components/request-row';
import CampaignContract from '../../../ethereum/campaign';

const CampaignRequests = (props) => {

  const router = useRouter();

  const { Header, Row, HeaderCell, Body } = Table;

  const renderRow = () => {
    console.log('propss', props)
    return props?.requests.map((request, index) => (
      <RequestRow
        id={index}
        key={index}
        request={request}
        address={props.address}
        approversCount={props.approversCount}
      />
    ))
  }

  return (
    <Layout>
      <h1>Requests Lists</h1>

      <Button primary floated={'right'} style={{marginBottom: 10}} onClick={() => router.push(`/campaigns/${props.address}/requests/new`)}>Add Request</Button>

      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>
          {renderRow()}
        </Body>
      </Table>
      <div>Found {props.requests.length} requests.</div>
    </Layout>
  )
};

CampaignRequests.getInitialProps = async ({ query }) => {
  const { address } = query;

  const campaignContract = CampaignContract(address);

  const requestsCount = await campaignContract.methods.getRequestsCount().call();
  const approversCount = await campaignContract.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestsCount)).fill().map((element, index) => {
      return campaignContract.methods.requests(index).call();
    })
  )

  return { address, requests, requestsCount, approversCount }
}
export default CampaignRequests;
