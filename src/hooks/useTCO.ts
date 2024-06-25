import { useForm, UseFormReturn } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { formData } from "../widgets/TCO/formData";


const schema = yup.object().shape({
  search: yup.string().required("Search is required"),
  fuel: yup.string().required("Fuel is required"),
  application: yup.string().required("Application is required"),
  vehicleType: yup.string().required("Vehicle type is required"),
  price: yup.string().required("Price is required"),
  gst: yup.string().required("GST is required"),
  tcs: yup.string().required("TCS is required"),
  chassisFinance: yup.string().required("Chassis finance is required"),
  chassisBodyBuilding: yup
    .string()
    .required("Chassis body building is required"),
  discounts: yup.string().required("Discounts are required"),
  irr: yup.string().required("IRR is required"),
  tenure: yup.string().required("Tenure is required"),
  interestLost: yup.string().required("Interest lost is required"),
  insuranceCost: yup.string().required("Insurance cost is required"),
  registrationCost: yup.string().required("Registration cost is required"),
  step: yup.number().required("Step is required"),
  selectOption: yup.string().required("Select option is required"),
  estimatedMailage: yup.string().required("Estimated Mailage is required"),
  kmPerMonth: yup.string().required("KM/Month  is required"),
  fuelcost: yup.string().required("Fuel cost is required"),
  tyreLife:yup.string().required("Tyre Life is required"),
  noOfTyres:yup.string().required("No.Of Tyres is required"),
  costPerTyre:yup.string().required("Cost/Tyre is required"),
  generalMaintainencePerKm:yup.string().required("General Maintainence/Km is required"),
  miscTrip:yup.string().required("Cost/Tyre is required")

});

const defaultValues = {
  search: "",
  fuel: "",
  application: "",
  vehicleType: "",
  price: "",
  gst: "",
  tcs: "",
  chassisFinance: "",
  chassisBodyBuilding: "",
  discounts: "",
  irr: "",
  tenure: "",
  interestLost: "",
  insuranceCost: "",
  registrationCost: "",
  step: 1,
  selectOption: "", // Initialized selectOption
  estimatedMailage:"",
  kmPerMonth: "",
  fuelcost: "",
  tyreLife:"",
  noOfTyres:"",
  costPerTyre:"",
  generalMaintainencePerKm:"",
  miscTrip:""

};

const useTCO = () => {

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };

  const methods = useForm({
    defaultValues:{...defaultValues, ...formData},
    resolver: yupResolver(schema),
  });



  // const nextStep = () => {
  //   methods.setValue("step", methods.getValues("step") + 1);
  // };

  // const prevStep = () => {
  //   methods.setValue("step", methods.getValues("step") - 1);
  // };

  // return {methods};
  return {
    methods,
  };
};

export default useTCO;
