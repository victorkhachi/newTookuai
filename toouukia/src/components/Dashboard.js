import React from 'react'



const Dashboard = () => {
  return (
    <section className="sectD"> 
      <div className="D-header shadow">
        <div className="icn1">
          <i class="fas fa-bars"  data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"></i>
          <i class="fas fa-calendar-week"></i>
        </div>
        <div className="icn2">
          <i class="fas fa-search"></i>
          <i class="fas fa-bell"></i>
          <i class="fas fa-user"></i>
        </div>
      </div>
      
       <h5>OVERVIEW</h5>
      <div className="cards">
           
            <div className="card shadow-sm">
                <div className="icn">
                <i class="fas fa-users"></i>
                </div>
                <div className="txt">
                    <h1>20,000</h1>
                    <p>Number Of Drivers</p>
                </div>
            </div>
    
            <div className="card shadow-sm">
              <div className="icn">
                <i class="fas fa-users"></i>
                </div>
                <div className="txt">
                    <h1>20,000</h1>
                    <p>Number Of Drivers</p>
                </div>
            </div>

            <div className="card shadow-sm">
                 <div className="icn">
                <i class="fas fa-users"></i>
                </div>
                <div className="txt">
                    <h1>20,000</h1>
                    <p>Number Of Drivers</p>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="icn">
                <i class="fas fa-users"></i>
                </div>
                <div className="txt">
                    <h1>20,000</h1>
                    <p>Number Of Drivers</p>
                </div>
            </div>
      </div>
    </section>
  );
}

export default Dashboard
