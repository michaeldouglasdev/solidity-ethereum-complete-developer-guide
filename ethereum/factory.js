import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xbaDc155e1DDFf039956e216CAAbC5f8ACf5218C4'
);

export default instance;
