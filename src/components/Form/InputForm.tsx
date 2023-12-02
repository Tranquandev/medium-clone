import { Input } from "@nextui-org/react";
import { useController } from "react-hook-form";

type InputFormProps = {
  type?: string;
  label?: string;
  errorMessage?: string;
  control?: any;
  name: string;
};
export default function InputForm(props: InputFormProps) {
  const { field } = useController({
    name: props.name,
    control: props.control,
  });
  return (
    <Input
      type={props.type || "text"}
      label={props.label || ""}
      isInvalid={!!props.errorMessage}
      errorMessage={props.errorMessage || ""}
      {...field}
    />
  );
}
