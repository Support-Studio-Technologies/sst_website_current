import React from "react";
import Image from "next/image";
import careercall from "../../assets/contactus/careercall.svg";
import careermsg from "../../assets/contactus/careermsg.svg";
import careerlocation from "../../assets/contactus/careerlocation.svg";

const ContactInfo = () => {
  return ( 
    <div className="bg-white p-8 lg:p-12 overflow-x-hidden overflow-hidden">
      <div className="max-w-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600 mb-8 lg:mb-12">
          Say something to start a live chat!
        </p>

        <div className="space-y-6 lg:space-y-8">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={careercall}
                alt="Phone"
                width={24}
                height={24}
                className="text-gray-700"
              />
            </div>
            <span className="text-gray-700 text-base">0413-2191301</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={careermsg}
                alt="Email"
                width={24}
                height={24}
                className="text-gray-700"
              />
            </div>
            <div className="text-gray-700 text-base">
              <div>hi@isupportz.com</div>
              <div>info@isupportz.com</div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 flex-shrink-0 mt-0.5">
              <Image
                src={careerlocation}
                alt="Location"
                width={24}
                height={24}
                className="text-gray-700"
              />
            </div>
           <div className="text-gray-700 text-base leading-relaxed">
  {/* Laptop/Desktop */}
  <span className="hidden sm:inline">
    #192, Kamaraj Salai, Puducherry - 605 013
  </span>

  {/* Mobile */}
  <span className="inline sm:hidden">
    #192, Kamaraj Salai,<br />
    Puducherry - 605 013
  </span>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;