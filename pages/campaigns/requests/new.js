import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Layout } from '../../../components/layout';
import CampaignContract from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

const CampaignRequestsNew = (props) => {

  const [description, setDescription] = useState('');
  const [value, setValue] = useState();
  const [recipient, setRecipient] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorMessage('');

      const accounts = await web3.eth.getAccounts();
      const campaign = CampaignContract(props.address);

      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({ from: accounts[0 ]});

      router.replace(`/campaigns/${props.address}/requests/`)

    } catch (e) {
      setErrorMessage(e.message)
    } finally {
      setLoading(false)
    }


  }

  return (
    <Layout>

      <Button primary onClick={() => router.push(`/campaigns/${props.address}/requests`)}>Back</Button>
      <h1>Create Request</h1>

      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Value in Ether</label>
          <Input
           value={value}
           onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Recipient</label>
          <Input
             value={recipient}
             onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Field>

        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>Create!</Button>
      </Form>
    </Layout>
  )
};

CampaignRequestsNew.getInitialProps = async ({ query }) => {
  const { address } = query;


  return { address }
}
export default CampaignRequestsNew;
