import Layout from '../../Layout';
import OrdersTable from '../../components/Orders';

import { db } from '../../firebase-settings';
import { collection, query, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';

const Orders = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function getOrders() {

      const q = query(collection(db, 'orders'));
      
      const snapShot = await getDocs(q);
      const arr = snapShot.docs.map((doc) => ({ ...doc.dat(), id: doc.id }));

      setOrders(arr);
    }

    getOrders();
  }, [])
  
  return (
    <Layout>
      <section class="section">
        <div class="section-body">
          <OrdersTable />
        </div>
      </section>
    </Layout>
  );
}
 
export default Orders;