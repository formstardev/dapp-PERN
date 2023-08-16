import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// import PropTypes from "prop-types";

export function StatisticsCard({ color, icon, title, value, footer }) {
  return (
    <Card className="bg-[#373C40]">
      <CardHeader
        variant="gradient"
        color='white'
        className={`absolute -mt-4 ${color} grid h-16 w-16 place-items-center`}
      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-white">
          {title}
        </Typography>
        <Typography variant="h4" color="white">
          {value}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 text-white p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

// StatisticsCard.propTypes = {
//   color: PropTypes.oneOf([
//     "white",
//     "blue-gray",
//     "gray",
//     "brown",
//     "deep-orange",
//     "orange",
//     "amber",
//     "yellow",
//     "lime",
//     "light-green",
//     "green",
//     "teal",
//     "cyan",
//     "light-blue",
//     "blue",
//     "indigo",
//     "deep-purple",
//     "purple",
//     "pink",
//     "red",
//   ]),
//   icon: PropTypes.node.isRequired,
//   title: PropTypes.node.isRequired,
//   value: PropTypes.node.isRequired,
//   footer: PropTypes.node,
// };

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
