import React, { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Layout } from '../../components/layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

const CampaignNew = () => {


  const [minimumContribution, setMinimumContribution] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createCampaign(minimumContribution)
        .send({
          from: accounts[0]
        });

        Router.pushRoute('/')
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <h1>New Campaign!</h1>

      <Form onSubmit={handleSubmit} error={errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label='wei'
            labelPosition='right'
            value={minimumContribution}
            onChange={event => setMinimumContribution(event.target.value)}
          />
        </Form.Field>

        <Message error header='Oops!' content={errorMessage} />
        <Button loading={loading} primary>Create!{minimumContribution}</Button>
      </Form>
    </Layout>
  )
}

export default CampaignNew;

