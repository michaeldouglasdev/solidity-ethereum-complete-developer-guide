import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layout';
import factory from '../../ethereum/factory';
import campaignContract from '../../ethereum/campaign';
import { Button, Card, Grid, GridColumn } from 'semantic-ui-react';
import ContributeForm from '../../components/contribute-form';
import web3 from '../../ethereum/web3';
import Link from '../../routes';

const CampaignShow = (props) => {

  const router = useRouter();
  const [campaign, setCampaign] = useState({});

  const renderCards = () => {
    const { balance, manager, minimumContribution, requestsCount, approversCount } = props;
    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver',
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A requests tries  to withdraw money from the contract. Request must be approved by approvers',
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign.'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.'
      }
    ];

    return <Card.Group items={items} />
  }

  return (
    <Layout>
      <h1>show</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {renderCards()}

          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={props.address} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <GridColumn>
            <Button primary onClick={() => router.push(`/campaigns/${props.address}/requests`)}>View Requests {props.address}</Button>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Layout>
  )
}


CampaignShow.getInitialProps = async ({ query }) => {
  const { address } = query;
  const campaign = campaignContract(address);
  const summary = await campaign.methods.getSummary().call();

  return {
    address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
}
export default CampaignShow;