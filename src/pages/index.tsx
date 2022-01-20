import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../components/layout';
import TimeSpend from '../components/time-spend';
import TimeTracker from '../components/time-tracker';
import CallToAction from '../components/call-to-action';
import Integration from '../components/integration';
import Report from '../components/report';

const IndexPage = () => (
  <Layout>
    <Seo title="Dashboard" />
    <div className="grid grid-cols-12 gap-20">
      <div className="flex flex-col gap-8 col-span-8">
        <TimeSpend />
        <TimeTracker />
      </div>
      <div className="flex flex-col gap-8 col-span-4">
        <CallToAction />
        <Report />
        <Integration />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
