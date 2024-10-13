import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import { useNavigate } from 'react-router-dom';










import Card from './components/Debit-card.jsx';
import Otp from './Otp.jsx';
import Shop from './components/shop.jsx';
import Iphone11 from './iphone/iphone11.jsx';
import Adress from './components/adress.jsx';
import Contact from './components/contact.jsx';
import AboutUS from './components/aboutUS.jsx';
import Iphone12 from './iphone/iphone12.jsx';
import Iphone13 from './iphone/iphone13.jsx';
import Iphone14 from './iphone/iphone14.jsx';
import Iphone15 from './iphone/iphone15.jsx';
import S23ultra from './samsung/samsungs23-ultra.jsx';
import S23plus from './samsung/samsungs23-plus.jsx';
import Zflip from './samsung/zflip.jsx';
import Zfold from './samsung/zfold.jsx';
import Oneplus10T from './oneplus/10T.jsx';
import Oneplus11 from './oneplus/oneplus11.jsx';
import Oneplus11R from './oneplus/oneplus11R.jsx';
import Oneplus12 from './oneplus/oneplus12.jsx';
import Nothing1 from './nothing phone/nothing-phone1.jsx';
import Nothing2 from './nothing phone/nothing-phone2.jsx';
import Iphone12MINI from './iphone/iphone12.jsx';
import Iphone13mini from './iphone/iphone13mini.jsx';
import Iphone14plus from './iphone/iphone14plus.jsx';
import Iphone15plus from './iphone/iphone15plus.jsx';
import Iphone13pro from './iphone/iphone13pro.jsx';
import Iphone13promax from './iphone/iphone13promax.jsx';
import Iphone14pro from './iphone/iphone14pro.jsx';
import Iphone14promax from './iphone/iphone14promax.jsx';
import Iphone15pro from './iphone/iphone15pro.jsx';
import Iphone15promax from './iphone/iphone15promax.jsx';

import Paymentdone from './components/paymentdone.jsx';
import Paymentfail from './components/paymentfail.jsx';
import Upipayment from './components/upi-paymentdone.jsx';
import Upipay from './components/upipayment.jsx';
import Iphone from './iphone/iphone.jsx';
import Samsung from './samsung/samsung.jsx';
import OnePlus from './oneplus/oneplus.jsx';
import Earphone1 from './other/earphone1.jsx';
import Miwatch1 from './other/watch1.jsx';
import Headphone1 from './other/headphone1.jsx';
import Earphone2 from './other/earphone2.jsx';
import Iphone12mini from './iphone/iphone12mini.jsx';
import Mainpayment from './components/main-payment-section.jsx';
import Watch2 from './other/watch2.jsx';
import Watch4 from './other/watch4.jsx';
import Datacable1 from './other/datacable1.jsx';
import Loader from './components/loader1.jsx';
import Loader1 from './components/loader1.jsx';
import Loader2 from './components/loader2.jsx';
import Loader3 from './components/loader3.jsx';
import Loader4 from './components/loader4.jsx';
import Loader5 from './components/loader5.jsx';
import Zfold6 from './samsung/zfold6.jsx';
import Iphone16 from './iphone/iphone16.jsx';
import Iphone16plus from './iphone/iphone16plus.jsx';
import Iphone16pro from './iphone/iphone16pro.jsx';
import Iphone16promax from './iphone/iphone16promax.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/Iphone",
    element: <Iphone />,
  },
  {
    path: "/Iphone11",
    element: <Iphone11 />,
  },
  {
    path: "/Iphone12",
    element: <Iphone12 />,
  },
  {
    path: "/Iphone12-mini",
    element: <Iphone12mini />,
  },
  {
    path: "/Iphone13",
    element: <Iphone13 />,
  },
  {
    path: "/Iphone13-mini",
    element: <Iphone13mini />,
  },
  {
    path: "/Iphone13-pro",
    element: <Iphone13pro />,
  },
  {
    path: "/Iphone13-pro-max",
    element: <Iphone13promax />,
  },
  {
    path: "/Iphone14",
    element: <Iphone14 />,
  },
  {
    path: "/Iphone14",
    element: <Iphone14 />,
  },
  {
    path: "/Iphone14-plus",
    element: <Iphone14plus />,
  },
  {
    path: "/Iphone14-pro",
    element: <Iphone14pro />,
  },
  {
    path: "/Iphone14-pro-max",
    element: <Iphone14promax />,
  },
  {
    path: "/Iphone15",
    element: <Iphone15 />,
  },
  {
    path: "/Iphone15-plus",
    element: <Iphone15plus />,
  },
  {
    path: "/Iphone15-pro",
    element: <Iphone15pro />,
  },
  {
    path: "/Iphone15-pro-max",
    element: <Iphone15promax />,
  },
  {
    path: "/Iphone16",
    element: <Iphone16 />,
  },
  {
    path: "/Iphone16plus",
    element: <Iphone16plus />,
  },
  {
    path: "/Iphone16-pro",
    element: <Iphone16pro />,
  },
  {
    path: "/Iphone16-pro-max",
    element: <Iphone16promax />,
  },
  {
    path: "/adress",
    element: <Adress />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/aboutUS",
    element: <AboutUS />,
  },
  {
    path: "/Order-Recived",
    element: <Paymentdone />,
  },
  {
    path: "/Payment-fail",
    element: <Paymentfail />,
  },
  {
    path: "/Upi-Payment-Done",
    element: <Upipayment />,
  },
  {
    path: "/Upi-Payment-Option",
    element: <Upipay />,
  },
  {
    path: "/Samsung",
    element: <Samsung />,
  },
  {
    path: "/Samsung-Galaxy-S23-ULTRA",
    element: <S23ultra />,
  },
  {
    path: "/Samsung-Galaxy-S23-Plus",
    element: <S23plus />,
  },
  {
    path: "/Samsung-Galaxy-Zflip",
    element: <Zflip />,
  },
  {
    path: "/Samsung-Galaxy-Zfold",
    element: <Zfold />,
  },
  {
    path: "/Samsung-Galaxy-Zfold6",
    element: <Zfold6 />,
  },
  {
    path: "/OnePlus",
    element: <OnePlus />,
  },
  {
    path: "/OnePlus-10T",
    element: <Oneplus10T />,
  },
  {
    path: "/OnePlus-11",
    element: <Oneplus11 />,
  },
  {
    path: "/OnePlus-11R",
    element: <Oneplus11R />,
  },
  {
    path: "/OnePlus-12",
    element: <Oneplus12 />,
  },
  {
    path: "/Nothing-1",
    element: <Nothing1 />,
  },
  {
    path: "/Nothing-2",
    element: <Nothing2 />,
  },

  {
    path: "/Payment-Methods",
    element: <Mainpayment />,
  },

  {
    path: "/Payment-section",
    element: <Card />,
  },

  {
    path: "Otp-verification",
    element: <Otp />,
  },
  {
    path: "earphone",
    element: <Earphone1 />,
  },
  {
    path: "Mi-Smart-Watch",
    element: <Miwatch1 />,
  },
  {
    path: "Zebronic-headphone",
    element: <Headphone1 />,
  },
  {
    path: "Boult-Wired-Earphone",
    element: <Earphone2 />,
  },
  {
    path: "Sunway-watch",
    element: <Watch2 />,
  },
  {
    path: "RPS-watch",
    element: <Watch4 />,
  },
  {
    path: "Ptron-datacable",
    element: <Datacable1 />,
  },
  {
    path: "Loading",
    element: <Loader1 />,
  },
  {
    path: "Loading.",
    element: <Loader2 />,
  },
  {
    path: "Loading..",
    element: <Loader3 />,
  },
  {
    path: "Loading...",
    element: <Loader4 />,
  },
  {
    path: "Loading....",
    element: <Loader5 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
