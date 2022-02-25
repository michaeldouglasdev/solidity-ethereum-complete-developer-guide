import React, { useEffect, useState } from 'react';
import { Button, Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import { Layout } from '../components/layout';
import { Link } from '../routes';
import { useRouter } from 'next/router';
const IndexPage = (props) => {

  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getDeployedCampaigns = async () => {
      const campaigns = await factory.methods.getDeployedCampaigns().call();

      setCampaigns(campaigns)
    }

    getDeployedCampaigns();
  }, []);

  const renderCampaings = () => {

    const items = campaigns.map(address => {
      return {
        header: address,
        description: (
            <a onClick={() => router.push(`/campaigns/${address}`)}>View Campaign</a>
        ),
        fluid: true
      }
    })

    return <Card.Group items={items} />
  }

  return (
    <Layout>
      <div>

        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button
              floated="right"
              content="Create Campaign"
              icon="add circle"
              primary
            />
          </a>
        </Link>


        {renderCampaings()}

      </div>
    </Layout>

  )
};

export default IndexPage;