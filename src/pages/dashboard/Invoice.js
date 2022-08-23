import Layout from "../../Layout";
import InvoiceComponent from "../../components/Invoice";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase-settings';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Invoice = () => {

  const { id } = useParams();
  
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState({});

  useEffect(() => {
    async function getOrder(id) {
      const docRef = doc(db, "orders", id);
      localStorage.setItem("orderId", id);
      const docSnap = await getDoc(docRef);
      setOrder(docSnap.data());
      const light = docSnap.data().lights.map(l => l.amount * parseInt(l.price));
      setTotal(light.reduce((prev, next) => (prev + next)));
    }
    getOrder(id);
  }, [id]);

  return (
    <Layout>
      <section class="section">
        <div class="section-body">
          <InvoiceComponent />
        </div>
      </section>
    </Layout>
  );
}
 
export default Invoice;