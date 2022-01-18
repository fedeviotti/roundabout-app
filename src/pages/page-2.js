import * as React from 'react';
import { Link } from 'gatsby';

import Dashboard from '../components/dashboard';
import Seo from '../components/seo';

const SecondPage = () => (
  <Dashboard>
    <Seo title="Page two" />
    <Link to="/">Go back to the homepage</Link>
  </Dashboard>
);

export default SecondPage;
