import { useEffect, useState } from "react";
import iPhone12mini from "../../images/iPhone12mini.jpg";
import iPhoneSE from "../../images/iPhoneSE.jpg";
import Mi11i from "../../images/Mi11i.jpg";
import SamsungM32 from "../../images/SamsungM32.jpg";
import LenovoIdeapd from "../../images/Lenovoideapad.jpg";
import MiNotebook from "../../images/MiNotebookHorizon.jpg";
import DellInspiron from "../../images/DellInspiron.jpg";
import HpCore from "../../images/hpi3Core.jpg";
import BoatAirdopes from "../../images/BoatAirdopes.jpg";
import OppoEnco from "../../images/oppoEncobuds.jpg";
import RealmeBuds from "../../images/RealmebudsQ2.jpg";
import TrukeFit from "../../images/TrukeFit.jpg";

const useProductList = () => {
  const [showMobile, setShowMobile] = useState({ mobileList: [] }); //useState for mobilelist
  const [showLaptop, setShowLaptop] = useState({ laptopList: [] }); //useState for Laptoplist
  const [showHeadPhones, setShowHeadPhones] = useState({ headphonesList: [] }); //useState for HeadPhoneslist
  const [searchMobile, setSearchMobile] = useState(""); //useState for Searchmobile
  const [searchLaptop, setSearchLaptop] = useState(""); //useState for Searchlaptop
  const [searchHeadphones, setSearchHeadPhones] = useState(""); //useState for Searchheadphones
  const [viewDetails, setViewDetails] = useState({ productDetails: [] }); //usestate for productdetails

  const [formIndex, setFormIndex] = useState(0); //usestate for formindex
  const [showModal, setShowModal] = useState({
    //usestate for openmodal
    open: false,
    message: ""
  });
  const mobile = [
    {
      id: "1",
      name: "APPLE iPhone 12Mini",
      type: "mobile",
      ram: "4GB RAM",
      screen: "1080 * 2340px (5.4inch)",
      rom: "64GB ROM",
      camera: "dual 12MP,f/1.6,2.6mm(wide)",
      price: "59,599",
      image: iPhone12mini
    },
    {
      id: "2",
      name: "APPLE iPhone SE",
      type: "mobile",
      ram: "3GB RAM",
      rom: "64GB ROM",
      screen: "1334 * 750px (4.7inch)",
      camera: "dual 7MP:f/2.2 Aperture",
      price: "72,999",
      image: iPhoneSE
    },
    {
      id: "3",
      name: "XIAOMI 11i 5G",
      type: "mobile",
      screen: "1080 * 2400px (6.67inch)",
      ram: "8GB RAM",
      rom: "128GB ROM",
      camera: "triple 108MP,f/1.8,26mm(wide)",
      price: "29,999",
      image: Mi11i
    },
    {
      id: "4",
      name: "SAMSUNG Galaxy M32",
      type: "mobile",
      screen: "720 * 1600px (6.5inch)",
      ram: "8GB RAM",
      rom: "4GB ROM",
      camera: "Quad 48 MP,f/1.8,26mm (wide)",
      price: "20,999",
      image: SamsungM32
    }
  ]; //mobileItems
  const laptop = [
    {
      id: "1",
      name: "LENOVO Ideapad slim i5Core",
      type: "laptop",
      screen: "1920 * 1080px (15.60inch)",
      processor: "core i3",
      os: "windows10",
      harddisk: "1TB",
      ram: "8GB RAM",
      price: "52,999",
      image: LenovoIdeapd
    },
    {
      id: "2",
      name: "Mi Notebook Horizon Edition",
      type: "laptop",
      screen: "1920 * 1080px (14inch)",
      processor: "core i7",
      harddisk: "512GB SSD",
      os: "windows10",
      ram: "8GB RAM",
      price: "50,999",
      image: MiNotebook
    },
    {
      id: "3",
      name: "DELL Inspiron i3Core",
      type: "laptop",
      screen: "1980 * 1080px (15.6inch)",
      processor: "core i3",
      harddishk: "1TB",
      os: "windows10",
      ram: "8GB RAM",
      price: "43,999",
      image: DellInspiron
    },
    {
      id: "4",
      name: "HP i3Core",
      type: "laptop",
      screen: "1366 * 768px (14inch)",
      processor: "corei3",
      harddisk: "500GB HDD",
      os: "windows10",
      ram: "8GB RAM",
      price: "37,999",
      image: HpCore
    }
  ]; //laptopitems
  const headphones = [
    {
      id: "1",
      name: "Baot Airdopes 131",
      type: "headphones",
      price: "3900",
      battery: "12hrs playing time",
      image: BoatAirdopes
    },
    {
      id: "2",
      name: "OPPO Enco Buds",
      type: "headphones",
      price: "4900",
      battery: "10hr playing time",
      image: OppoEnco
    },
    {
      id: "3",
      name: "Realme Buds Q2 Neo",
      type: "headphones",
      price: "2999",
      battery: "6hr playing time",
      image: RealmeBuds
    },
    {
      id: "4",
      name: "Truke Fit 1+",
      type: "headphones",
      price: "1499",
      battery: "5hr playing time",
      image: TrukeFit
    }
  ]; //headPhones items

  useEffect(() => {
    showMobileList();
    showLaptopList();
    showHeadPhonesList();
  }, []);
  //function for showMobile list
  const showMobileList = () => {
    setShowMobile({ mobileList: mobile });
  };
  //function for showLaptop list
  const showLaptopList = () => {
    setShowLaptop({ laptopList: laptop });
  };
  //function for showLaptop list
  const showHeadPhonesList = () => {
    setShowHeadPhones({ headphonesList: headphones });
  };

  //function for search mobiles
  const handleSearchMobile = (event) => {
    if (event.target.value !== "") {
      setSearchMobile(event.target.value);
      const results = showMobile.mobileList.filter((item) =>
        item.name.toLowerCase().includes(event.target.value)
      );
      setShowMobile({ mobileList: results });
    } else {
      setSearchMobile(null);
      setShowMobile({ mobileList: mobile });
    }
  };
  //function for search laptop
  const handleSearchLaptop = (event) => {
    if (event.target.value !== "") {
      setSearchLaptop(event.target.value);
      const results = showLaptop.laptopList.filter((item) =>
        item.name.toLowerCase().includes(event.target.value)
      );
      setShowLaptop({ laptopList: results });
    } else {
      setSearchLaptop(null);
      setShowLaptop({ laptopList: laptop });
    }
  };
  //function for search headphones
  const handleSearchHeadphones = (event) => {
    if (event.target.value !== "") {
      setSearchHeadPhones(event.target.value);
      const results = showHeadPhones.headphonesList.filter((item) =>
        item.name.toLowerCase().includes(event.target.value)
      );
      setShowHeadPhones({ headphonesList: results });
    } else {
      setSearchHeadPhones(null);
      setShowHeadPhones({ headphonesList: headphones });
    }
  };

  //function for viewDetails
  const handleViewDetails = (name, type, id) => {
    //check the type
    if (type === "mobile") {
      const result = showMobile.mobileList.filter((item) => {
        return item.id === id;
      });
      setViewDetails({ productDetails: result });
    }
    if (type === "headphones") {
      const result = showHeadPhones.headphonesList.filter((item) => {
        return item.id === id;
      });
      setViewDetails({ productDetails: result });
    }
    if (type === "laptop") {
      const result = showLaptop.laptopList.filter((item) => {
        return item.id === id;
      });
      setViewDetails({ productDetails: result });
    }
    setFormIndex(formIndex + 1);
  };
  // function for handleback
  const handleBack = () => {
    setFormIndex(formIndex - 1);
  };
  // function for handlebuy
  const handleBuy = () => {
    setShowModal({ open: true, message: "Product Added Successfully" });
  };
  // function for handleSuccess
  const handleSuccess = () => {
    setShowModal({ open: false });
    setFormIndex(formIndex - 1);
  };

  return {
    showMobile,
    showLaptop,
    showHeadPhones,
    viewDetails,
    formIndex,
    showModal,
    searchMobile,
    searchLaptop,
    searchHeadphones,
    handleSearchMobile,
    handleSearchHeadphones,
    handleSearchLaptop,
    handleViewDetails,
    handleBack,
    handleBuy,
    handleSuccess
  };
};
export default useProductList;
