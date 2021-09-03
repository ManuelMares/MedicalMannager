import { FormControl } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import Label from "../Label";

interface RenderProps {
  value?: string;
  rest?: any;
}

const renderLabel = (props: RenderProps = {}) => {
  const { value = "test value", rest = {} } = props;

  return render(
    <FormControl>
      <Label value={value} {...rest} />
    </FormControl>
  );
};

describe("Label", () => {
  test("renders correctly", () => {
    const { container } = renderLabel();
    expect(container).toBeInTheDocument();
  });

  test("renders with custom text", () => {
    const customText = "custom text value";
    const props: RenderProps = { value: customText };
    const c = renderLabel(props);
    expect(c.getByText(customText)).toBeInTheDocument();
  });

  test("renders with custom props", () => {
    const props: RenderProps = { rest: { color: "green" } };
    const c = renderLabel(props);
    expect(c.getByTestId("label")).toHaveStyle("color: green");
  });
});
