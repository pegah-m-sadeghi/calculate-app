const FooterPanel = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 px-5 py-5 gap-4 bg-black">
        <a className="text-white cursor-pointer hover:underline" href="#">
          Contact us
        </a>
        <div className="text-white cursor-pointer hover:underline">
          Departments and agencies
        </div>
        <div className="text-white cursor-pointer hover:underline">
          Public service and military
        </div>
        <div className="text-white cursor-pointer hover:underline">News</div>
        <div className="text-white cursor-pointer hover:underline">
          Treaties, laws and regulations
        </div>
        <div className="text-white cursor-pointer hover:underline">
          Government-wide reporting
        </div>
        <div className="text-white cursor-pointer hover:underline">
          Prime Minister
        </div>
        <div className="text-white cursor-pointer hover:underline">
          How government works
        </div>
        <div className="text-white cursor-pointer hover:underline">
          Open government
        </div>
      </div>
    </>
  );
};
export default FooterPanel;
