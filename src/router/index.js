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
import FinalForm from '../components/forms/FinalForm';

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
      name: '1',
      component: FirstForm
    },
    {
      path: '/form-2',
      name: '2',
      component: SecondForm
    },
    {
      path: '/form-3',
      name: '3',
      component: ThirdForm
    },
    {
      path: '/form-4',
      name: '4',
      component: FourthForm
    },
    {
      path: '/form-5',
      name: '5',
      component: FifthForm
    },
    {
      path: '/form-6',
      name: '6',
      component: SixthForm
    },
    {
      path: '/form-7',
      name: '7',
      component: SeventhForm
    },
    {
      path: '/form-8',
      name: '8',
      component: EighthForm
    },
    {
      path: '/form-9',
      name: '9',
      component: FinalForm
    },
  ],
  mode: 'history'
})
