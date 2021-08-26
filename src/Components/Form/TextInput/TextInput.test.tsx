import { FormControl } from "@chakra-ui/react";
import { render, RenderResult } from "@testing-library/react";
import TextInput from ".";
import { BoxType, InputType } from "./TextInput";

interface RenderProps {
  name?: string;
  placeholder?: string;
  label?: any;
  rest?: InputType;
  wrapperParams?: BoxType;
}

const getInput = (c: RenderResult) => c.getByTestId("text-input");
const getWrapper = (c: RenderResult) => c.getByTestId("text-input-wrapper");

const renderTextInput = (props: RenderProps = {}) => {
  const {
    name = "",
    placeholder = "",
    label = "",
    rest = {},
    wrapperParams = {},
  } = props;

  return render(
    <FormControl>
      <TextInput
        name={name}
        placeholder={placeholder}
        label={label}
        rest={rest}
        wrapperParams={wrapperParams}
      />
    </FormControl>
  );
};

describe("TextInput", () => {
  test("renders correctly", () => {
    const c = renderTextInput();
    expect(c.container).toBeInTheDocument();
  });

  describe("Wrapper", () => {
    const customProps: RenderProps = { wrapperParams: { color: "blue" } };

    test("renders with default values", () => {
      const c = renderTextInput();
      expect(c.getByTestId("text-input-wrapper")).toBeInTheDocument();
    });

    test("renders with custom props", () => {
      const c = renderTextInput(customProps);
      const wrapper = getWrapper(c);
      expect(wrapper).toHaveStyle("color: blue");
    });
  });

  describe("input", () => {
    const customProps: RenderProps = {
      name: "test name",
      placeholder: "test placeholder",
      label: "test label",
      rest: { color: "green" },
    };

    test("renders with default values", () => {
      const c = renderTextInput();
      const input = getInput(c);

      expect(input).toBeInTheDocument();
    });

    test("renders with custom values", () => {
      const c = renderTextInput(customProps);
      const input = getInput(c);

      expect(input).toHaveStyle("color: green");
      expect(input).toHaveAttribute("name", "test name");
      expect(c.getByText("test label")).toBeInTheDocument();
    });
  });
});
