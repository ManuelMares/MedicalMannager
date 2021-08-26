import TextInput from "../../Components/Form/TextInput";
import Label from "../../Components/Form/Label/Label";

const AddPatient = () => {
  const props = {
    name: "textInput",
    placeholder: "Pon algo",
    label: <Label value="Prueba" />,
  };

  return <TextInput {...props} />;
};

export default AddPatient;
