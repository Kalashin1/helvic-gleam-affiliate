import Layout from "../../Layout";
import CustomersTable from "../../components/Customers";

import { db } from '../../firebase-settings';
import { collection, query, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';


const Customers = () => {

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    async function getOrders() {

      const customerQ = query(collection(db, 'users'));
      
      const customerSnapShot = await getDocs(customerQ);
      const customerArr = customerSnapShot.docs.map((doc) => ({ ...doc.dat(), id: doc.id }));

      setCustomers(customerArr);
    }

    getOrders();
  }, [])


  return (
    <Layout>
      <section class="section">
        <div class="section-body">
          <CustomersTable />
        </div>
      </section>
    </Layout>
  );
}
 
export default Customers;