import React from "react";

function SectionHeading(props) {
  const { title, description } = props;
  return (
    <div className="flex-col flex mb-4 md:mb-6">
      <h1 className="text-default-contrastPrimary text-lg font-xl tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-default-contrastSecondary text-base md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
