import React from "react";
import { useEffect } from "react";
import { StepProgressBar } from "react-native-step-progress-bar/src/StepProgressBar";

import { View } from "react-native";

import { Progress } from "../../types";

export default function ProgressBar({ activeStep }: Progress) {
  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);
  return (
    <StepProgressBar
      orientation={"horizondal"}
      barThickeness={2}
      activeStep={activeStep}
      labelContainerStyle={{ marginBottom: 10 }}
      stepColor="lightgray"
      completedBarColor="blue"
      barHeight={5}
      stepWidth={10}
      stepHeight={10}
      showLabel={false}
      barLength={12}
      data={[
        { label: "pageone" },
        { label: "pagetwo" },
        { label: "pagethree" },
        { label: "pagefour" },
        { label: "pagefive" },
        { label: "pagesix" },
        { label: "pageseven" },
        { label: "pageeight" },
        { label: "pagenine" },
        { label: "pageten" },
        { label: "pageeleven" },
        { label: "pagetwelve" },
      ]}
      barColor={"lightblue"}
      labelTextStyle={{
        fontFamily: "roboto",
        color: "blue",
      }}
      renderStep={({ index }) => {
        if (index <= activeStep) {
          return (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 25,
                backgroundColor: "blue",
              }}
            ></View>
          );
        } else {
          return (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 25,
                backgroundColor: "lightgray",
              }}
            ></View>
          );
        }
      }}
    />
  );
}
