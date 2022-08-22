import Layout from "../../Layout";
import InvoiceComponent from "../../components/Invoice";

const Invoice = () => {
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