import React from "react";

function SectionHeading(props) {
  const { title, description } = props;
  return (
    <div className="flex-col flex mb-4 md:mb-6">
      <h1 className="text-default-contrastPrimary text-xl font-medium tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-default-contrastSecondary tracking-normal text-base md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
