import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import CampaignContract from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

const ContributeForm = (props) => {

  const [value, setValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage('');
    const campaign = CampaignContract(props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether'),
      })

      router.replace(`/campaigns/${props.address}`)
    } catch (e) {
      setErrorMessage(e.message)
    } finally {
      setLoading(false);
      setValue(0);
    }
  }

  return (
    <Form onSubmit={handleSubmit} error={!!errorMessage}>
      <Form.Field>
        <label>Amount to contribute</label>
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          label="ether"
          labelPosition="right"
        />
      </Form.Field>

      <Message error header="Oops!" content={errorMessage}/>
      <Button primary loading={loading}>Contribute!</Button>
    </Form>
  )
}

export default ContributeForm;