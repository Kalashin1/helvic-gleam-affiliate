import Info from "../../components/Info";
import Layout from "../../Layout";
import Orders from '../../components/Orders';
import AffiliateLink from "../../components/Affiliate-Link";
import { db } from '../../firebase-settings';
import { collection, query, getDocs, where } from "firebase/firestore";
import { useState, useEffect } from 'react';

const Dashboard = () => {

  const [orders, setOrders] = useState(false);

  useEffect(() => {
    async function getOrders() {

      const q = query(collection(db, "orders"), where('affiliate', '==', localStorage.getItem('userId')));
    
      const snapShot = await getDocs(q);
      const arr = snapShot.docs.map((doc) => ({...doc.data(), id: doc.id }));

      console.log(arr);
      setOrders(arr);
      
    }

    getOrders();
  }, [])


  return (
    <Layout>
      <section  class="section">
        <Info />
        <AffiliateLink />
        <Orders />
      </section>
    </Layout>
  );
}
 
export default Dashboard;