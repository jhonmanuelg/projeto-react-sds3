import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


const Dashbord = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className=""> 
        
        
        <h1 className="text-primary py-3">Dashbord de Vendas</h1>
        </div>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">taxa de sucesso (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas </h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Todas Vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default Dashbord;
