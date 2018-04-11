
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '',name:'Home', component: () => import('components/Home') },
      { path: '/AboutUs', name:'AboutUs' ,component: () => import('components/AboutUs') },
      { path: '/FAQ', name:'FAQ' ,component: () => import('components/FAQ') },
      { path: '/FantasyCricketLegalities', name:'FantasyCricketLegalities' ,component: () => import('components/FantasyCricketLegalities') },
      { path: '/TermsAndCondition', name:'TermsAndCondition' ,component: () => import('components/TermsAndCondition') },
      { path: '/PointSystem', name:'PointSystem' ,component: () => import('components/PointSystem') },
      { path: '/ContactUs', name:'ContactUs' ,component: () => import('components/ContactUs') },
      { path: '/Verify', name:'Verify' ,component: () => import('components/Verify/Verify') },
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
