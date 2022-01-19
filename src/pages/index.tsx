import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../components/layout';
import TimeSpend from '../components/time-spend';
import TimeTracker from '../components/time-tracker';

const IndexPage = () => (
  <Layout>
    <Seo title="Dashboard" />
    <div className="flex flex-col gap-8">
      <TimeSpend />
      <TimeTracker />
    </div>
  </Layout>
);

export default IndexPage;
