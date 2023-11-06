import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDev from '../WebDev/WebDev';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 2xl:px-0 ">
      <div className="bg-[#DFF7E5]">
        <div className="container mx-auto">
          <Tabs selectedIndex={activeTab} onSelect={handleSelect} className="">
            <TabList className="flex items-center justify-between text-lg font-semibold">
              <Tab
                className="border-none"
                style={{
                  backgroundColor: activeTab === 0 ? '#05386B' : '#DFF7E5',
                  color: activeTab === 0 ? 'white' : 'black',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',
                  outline: 'none',
                  border:
                    activeTab === 0 ? '2px solid #05386B' : '2px solid #05386B',
                  borderRadius: 0,
                  transition: 'background-color 0.3s',
                }}
              >
                Web Development
              </Tab>
              <Tab
                className="border-none"
                style={{
                  backgroundColor: activeTab === 1 ? '#05386B' : '#DFF7E5',
                  color: activeTab === 1 ? 'white' : 'black',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',
                  outline: 'none',
                  borderTop:
                    activeTab === 1 ? '2px solid #05386B' : '2px solid #05386B',
                  borderBottom:
                    activeTab === 1 ? '2px solid #05386B' : '2px solid #05386B',
                  borderRadius: 0,
                  transition: 'background-color 0.3s',
                }}
              >
                Digital Marketing
              </Tab>
              <Tab
                className="border-none"
                style={{
                  backgroundColor: activeTab === 2 ? '#05386B' : '#DFF7E5',
                  color: activeTab === 2 ? 'white' : 'black',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',
                  outline: 'none',
                  border:
                    activeTab === 2 ? '2px solid #05386B' : '2px solid #05386B',
                  borderRadius: 0,
                  transition: 'background-color 0.3s',
                }}
              >
                Graphics Design
              </Tab>
            </TabList>

            <TabPanel className={`p-4 ${activeTab !== 0 ? 'hidden' : 'block'}`}>
              <WebDev></WebDev>
            </TabPanel>
            <TabPanel className={`p-4 ${activeTab !== 1 ? 'hidden' : 'block'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow-md rounded-md">
                  Card 2 Content
                </div>
              </div>
            </TabPanel>
            <TabPanel className={`p-4 ${activeTab !== 2 ? 'hidden' : 'block'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow-md rounded-md">
                  Card 3 Content
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
