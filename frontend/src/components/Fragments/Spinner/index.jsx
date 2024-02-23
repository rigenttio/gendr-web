import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <svg className="w-14 animate-pulse" width="108" height="100" viewBox="0 0 108 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M107.686 0H50.5011C36.355 0 23.5832 5.88171 14.498 15.3328C5.85831 24.3101 0.548828 36.5145 0.548828 49.957C0.548828 60.1257 3.58818 69.5815 8.81324 77.4754C11.7541 81.9312 15.3938 85.8852 19.5729 89.1919C28.0812 95.9038 38.8221 99.9094 50.5011 99.9094C62.1801 99.9094 72.2738 96.143 80.6508 89.7829C84.9002 86.57 88.615 82.6864 91.645 78.2915C97.2031 70.2381 100.458 60.4775 100.458 49.957C100.458 36.5145 95.1487 24.3101 86.509 15.3328H107.686V0ZM80.8806 66.5844C78.3806 71.1387 74.891 75.0692 70.6932 78.0851C65.0084 82.1751 58.0339 84.5813 50.5011 84.5813C42.9684 84.5813 35.5436 82.0157 29.7604 77.6865C25.6282 74.5908 22.2136 70.5946 19.8028 65.9887C17.2934 61.1951 15.8769 55.7449 15.8769 49.957C15.8769 30.8344 31.3785 15.3328 50.5011 15.3328C69.6237 15.3328 85.1254 30.8344 85.1254 49.957C85.1254 55.9841 83.5869 61.6501 80.8806 66.5844Z"
          fill="#D02AA6"
        />
      </svg>
    </div>
  );
};

export default Spinner;