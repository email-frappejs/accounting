import Vue from 'vue';
import Router from 'vue-router';
import coreRoutes from 'frappejs/ui/routes';

import Form from 'frappejs/ui/components/Form/Form';
import SetupWizard from '../pages/SetupWizard';
import Report from 'frappejs/ui/pages/Report';
import reportViewConfig from '../../reports/view';
import Email from '@/pages/Email/Email'
import EmailAccount from '@/pages/EmailAccount/EmailAccount'

Vue.use(Router);

const routes = [].concat(coreRoutes, [{
    path: '/setup-wizard',
    name: 'SetupWizard',
    components: {
      setup: SetupWizard
    }
  },
  {
    path: '/report/:reportName',
    name: 'Report',
    component: Report,
    props: (route) => {
      const {
        reportName
      } = route.params;
      return {
        reportName,
        reportConfig: reportViewConfig[reportName] || null
      };
    }
  },
  {
    path: '/view/:doctype/:name',
    name: 'Form',
    component: Form,
    props: true
  },
  {
    path: '/email/:doctype',
    name: 'Email',
    component: Email,
    props: true
  },
  {
    path: '/Account/:doctype',
    name: 'Email Account',
    component: EmailAccount,
    props: true
  }
]);

export default new Router({
  routes
});
