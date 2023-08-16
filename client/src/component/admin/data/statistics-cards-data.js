import {
  UserAddIcon,
  UserIcon,
  HomeIcon,
  ArrowNarrowRightIcon
  
} from "@heroicons/react/solid";

export const statisticsCardsData = [
  {
    color: "bg-sky-800",
    icon: ArrowNarrowRightIcon,
    title: "Trending",
    value: "281",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "bg-blue-500",
    icon: UserIcon,
    title: "Today's Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "bg-green-500",
    icon: HomeIcon,
    title: "Revenue",
    value: "34k",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "bg-red-500",
    icon: UserAddIcon,
    title: "Followers",
    value: "+980",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
