import * as icons from "react-native-bootstrap-icons";
import CheckCircleFillIcon from "react-native-bootstrap-icons/icons/check-circle-fill";

interface IconProps extends icons.IconProps {
  // Cannot use "name" as it is a valid SVG attribute
  // "iconName", "filename", "icon" will do it instead
  iconName: keyof typeof icons;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
};
