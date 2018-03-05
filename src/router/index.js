import Vue from 'vue'
import Router from 'vue-router'

import FirstForm from '../components/forms/FirstForm';
import SecondForm from '../components/forms/SecondForm';
import ThirdForm from '../components/forms/ThirdForm';
import FourthForm from '../components/forms/FourthForm';
import FifthForm from '../components/forms/FifthForm';
import SixthForm from '../components/forms/SixthForm';
import SeventhForm from '../components/forms/SeventhForm';
import EighthForm from '../components/forms/EighthForm';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: FirstForm
    },
    {
      path: '/form-1',
      name: 'First',
      component: FirstForm
    },
    {
      path: '/form-2',
      name: 'Second',
      component: SecondForm
    },
    {
      path: '/form-3',
      name: 'Third',
      component: ThirdForm
    },
    {
      path: '/form-4',
      name: 'Fourth',
      component: FourthForm
    },
    {
      path: '/form-5',
      name: 'Fifth',
      component: FifthForm
    },
    {
      path: '/form-6',
      name: 'Sixth',
      component: SixthForm
    },
    {
      path: '/form-7',
      name: 'Seventh',
      component: SeventhForm
    },
    {
      path: '/form-8',
      name: 'Eighth',
      component: EighthForm
    },
  ],
  mode: 'history'
})
