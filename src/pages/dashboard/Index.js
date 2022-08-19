import Info from "../../components/Info";
import Layout from "../../Layout";
import Chart from "../../components/Chart";
import Customers from "../../components/Customers";

const Dashboard = () => {
  return (
    <Layout>
      <section  class="section">
        <Info />
        <Customers />
      </section>
    </Layout>
  );
}
 
export default Dashboard;