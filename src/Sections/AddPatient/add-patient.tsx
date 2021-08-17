import TextInput from "../../Components/Form/InputText/text-input";
import Label from "../../Components/Form/Label/label";

const AddPatient = () => {
  const props = {
    name: "textInput",
    placeholder: "Pon algo",
    label: <Label value="Prueba" />,
  };

  return <TextInput {...props} />;
};

export default AddPatient;
