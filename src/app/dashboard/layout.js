import Sidebar from "@/components/Dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-6'>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
